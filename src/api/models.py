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
            "lastname": self.lastname,
            "equipos":[equipo.serialize() for equipo in self.equipos] if self.equipos else None
            # do not serialize the password, its a security breach
        }
    
class Tipo(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(120), unique=True, nullable=False)
    
    def _init_(self,name):
        self.name=name

    def _repr_(self):
        return f'<Tipo {self.name}>'

    def serialize(self):
        return{
            "id":self.id,
            "name":self.name
        }    
    

class Equipo(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(120),unique=True, nullable=False)
    


    tipo_id=db.Column(db.Integer, db.ForeignKey('tipo.id'))
    tipo=db.relationship("Tipo",backref="equipo")

    def _repr_(self):
        return f'<Equipo {self.name}>'
    
    def _init_(self,name,tipo_id):
        self.name=name
        self.tipo_id=tipo_id

    def serialize(self):
        return{
            "id":self.id,
            "name":self.name,
            "tipo":self.tipo.name if self.tipo else None
        }

class Cotizacion(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    cantidad=db.Column(db.String(80),nullable=False)

    user_id=db.Column(db.Integer, db.ForeignKey('user.id'))
    user=db.relationship("User",backref="equipos")


    
    equipo_id=db.Column(db.Integer,db.ForeignKey('equipo.id'))
    equipo=db.relationship("Equipo",backref="users")

    def _repr_(self):
        return f'<Cotizacion {self.id}>'
    
    
    def _init_(self,cantidad,user_id,equipo_id):
        self.cantidad=cantidad
        self.user_id=user_id
        self.equipo_id=equipo_id

    def serialize(self):
        return {
            "id": self.id,
            "user":self.user.name,
            "equipo": self.equipo.name,
            "cantidad":self.cantidad,
            "user_id":self.user_id,
            "equipo_id":self.equipo_id
        }


# class Favorite(db.Model):
#      id=db.Column(db.Integer, primary_key=True)
#      user_id=db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
#      user=db.relationship("User", foreign_keys=[user_id],backref="favorites")
#      favorite_user_id=db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
#      favorite_user=db.relationship("User", foreign_keys=[favorite_user_id], backref="favorited_by")

#      def _init_(self,user_id,favorite_user_id):
#          self.user_id=user_id
#          self.favorite_user_id=favorite_user_id

#      def __repr__(self):
#          return f'<Favorite user_id:{self.user_id} favorite_user_id:{self.favorite_user_id}>'

#      def serialize(self):
#          return {
#              "id": self.id,
#              "user_id": self.user_id,
#              "favorite_user_id": self.favorite_user_id,
#              "favorite_user_name": self.favorite_user.name if self.favorite_user else None,
#              "favorite_user_country": self.favorite_user.country if self.favorite_user else None,
#              "favorite_user_city": self.favorite_user.city if self.favorite_user else None,

#              "favorite_user_gender": self.favorite_user.gender if self.favorite_user else None,
#              "favorite_user_image": self.favorite_user.image if self.favorite_user else None

#          }
