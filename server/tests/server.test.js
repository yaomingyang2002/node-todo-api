const expect = require ('expect');
const  request = require ('supertest');
const {ObjectID} =require ('mongodb');
const  {app}  = require ('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

//for get test need some todo items
const todos =[{
    _id: new ObjectID,
    text: 'First test todo'
}, {
    _id: new ObjectID,
    text: 'second test todo'
}];

//to clear Todo DB before test
beforeEach ((done)=>{
    // Todo.remove({}).then(() => done());
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(()=> done());
});
//test script for POST/todos
describe('POST/todos', () =>{
    it('should create a new todo', (done) =>{
        let text = 'Test todo text';

        request (app)
            .post ('/todos')
            .send({text})
            .expect (200)
            .expect((res) =>{
                expect(res.body.text).toBe(text );
        })
        .end((err, res) => {
            if(err){ return done(err); }

            Todo.find({text}).then((todos) =>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
             }).catch((e) => done(e));
        });
    });

    //2nd case: it will not create when bad data sent
    it('should not create a new todo with invalid body data', (done) =>{
        let text = ' ';

        request (app)
            .post ('/todos')
            .send({text})
            .expect (400)
            .end((err, res) => {
                if(err){ return done(err); }

                Todo.find().then((todos) =>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
        });
});

//test script for GET /todos:
describe('GET /todos', () =>{
    it('should get all todos', (done) => {
        request (app)
            .get ('/todos')
            .expect (200)
            .expect((res) =>{
                expect(todos.length).toBe(2);
            })
            .end (done);
    });
});

//test script for GET /todos/:id
describe('GET /todos/:id', () =>{
    it('should return todo doc', (done) => {
        request (app)
            .get (`/todos/${todos[0]._id.toHexString()}`)
            .expect (200)
            .expect((res) =>{
                 expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end (done);
    });

    it('should return 404 if todo not found', (done) =>{
        let id = new ObjectID().toHexString(); //make a 24byte hex string
        // let id = new ObjectID()+ 1; //another way to make valid but not existed id
        request (app)
            .get (`/todos/${id}`)
            .expect (404)
            .expect((res) =>{
                expect('item not existed'); //the value we send in the server.js
            })
            .end(done);
    });

    it('should return 404 non-object ids', (done) =>{
        let id = (new ObjectID()) .abc ; //make an invalid id
        request (app)
            .get (`/todos/${id}`)
            // .get (`/todos/123abc`) //directly add an invalid id
            .expect (404)
            .expect((res) =>{
                // expect(res.body.todo.text).toBe('id invalid');
                expect('id invalid');
            })
            .end(done);
    });
});

//test script for DELETE /todos/:id
describe('DELETE /todos/:id', () => {
    it('should remove  a todo', (done) => {
        let hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId }`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId );
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.findById(hexId ).then((todo) => {
                    expect(todo).toBe(null);
                    // expect(todo).toNotExist();
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should return 404 if todo not found', (done) =>{
        let hexId = new ObjectID().toHexString(); //make a 24byte hex string
         // let id = new ObjectID()+ 1; //another way to make valid but not existed id
        request (app)
            .delete(`/todos/${hexId }`)
            .expect (404)
            .end(done);
    });

    it('should return 404 if object id is invalid', (done) =>{
        let id = (new ObjectID()) .abc ; //make an invalid id
        request (app)
            .delete(`/todos/123abc`)
            .expect (404)
            .end(done);
    });
} );