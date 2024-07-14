from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    _tablename_='user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname= db.Column(db.String(120),unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'
    
    def _init_(self,name,lastname,email,password):
        self.name=name
        self.lastname=lastname
        self.email=email
        self.password=password

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname
            # do not serialize the password, its a security breach
        }
    
    