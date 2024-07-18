"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User,Equipo,Cotizacion,Tipo
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from random import sample, choice, randint
from datetime import datetime, timedelta
from sqlalchemy import or_, and_


# import firebase_admin
# from firebase_admin import credentials, storage


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Creacion de usuario
@api.route("/signup",methods=["POST"])
def signup():
    email = request.json.get("email", None)
    name=request.json.get("name", None)
    lastname=request.json.get("lastname",None)
    password = request.json.get("password", None)

    if email is None:
        return jsonify({"msg":"missing email"}),404
    if name is None:
        return jsonify({"msg":"missing name"}),404
    if password is None:
        return jsonify({"msg":"missing password"}),404
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "This email is already associated with an account"}), 403
    
    
    new_user = User(email=email, name=name,lastname=lastname,password=password)
    db.session.add(new_user)
    db.session.commit()
    access_token=create_access_token(identity = new_user.email, expires_delta=timedelta(hours=3))
    return jsonify({"msg":"User created successfully", "token": access_token})

@api.route("/login",methods=["POST"])
def login():
    email=request.json.get("email",None)
    password=request.json.get("password",None)
    user=User.query.filter_by(email=email,password=password).one_or_none()
    if user is None:
        return jsonify({"msg":"User not Found"}),404
    access_token=create_access_token(identity=user.email, expires_delta=timedelta(hours=3))
    return jsonify(user=user.serialize(),access_token=access_token)


@api.route("/protected", methods=["GET"])
@jwt_required()
def private():
    email = get_jwt_identity()

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "User not found"}), 404
    
    return jsonify(user.serialize())

# @api.route("/favorites", methods=["POST"])
# @jwt_required()
# def addFavorite():
#     favorite_user_id = request.json.get("favorite_user_id", None)
    
#     user_email = get_jwt_identity()

#     user = User.query.filter_by(email=user_email).first()
#     if user is None:
#         return jsonify({"msg": "user not Found"}), 404

#     new_favorite = Favorite(user_id=user.id, favorite_user_id=favorite_user_id)



#     exist = Favorite.query.filter_by(user_id=user.id, favorite_user_id=favorite_user_id).first()
#     if exist is not None:
#         return jsonify({"msg": "The user is already in your favorites"}), 403
    


#     db.session.add(new_favorite)
#     db.session.commit()

# @api.route("/favorites/<int:id>", methods=["DELETE"])
# @jwt_required()
# def deleteFavorite(id):
    
#     user_email = get_jwt_identity()

#     user = User.query.filter_by(email=user_email).first()
#     if user is None:
#         return jsonify({"msg": "user not Found"}), 404

#     favorite = Favorite.query.filter_by(id=id).first()
#     if favorite is None:
#         return jsonify({"msg": "favorite not Found"}), 404



    
#     db.session.delete(favorite)
#     db.session.commit()

#     return jsonify({"msg":"user favorite deleted successful"})

@api.route("/profile", methods=["PUT"])
@jwt_required()
def update_user():
    # Fetch the user from the database
    email = get_jwt_identity()

    usuario = User.query.filter_by(email=email).first()

    # Check if the user exists
    if usuario is None:
        return jsonify({"msg": "User not found"}), 404

    # Get the updated data from the request
    datos_usuario = request.get_json()

    # Update the user's attributes

    for key in datos_usuario:
        for col in usuario.serialize():
            if key == col and key != "id":
                setattr(usuario, key, datos_usuario[key])

    # Commit the changes to the database
    db.session.commit()
    db.session.refresh(usuario)

    # Return a response
    return jsonify({
        'mensaje': 'Usuario actualizado con éxito',
        'usuario': usuario.serialize()})

@api.route("/populate", methods=['POST'])
def generate_database():

    tipos=['Video','Iluminacion','Audio']
    for tipo_name in tipos:
        tipo= Tipo(name=tipo_name)
        db.session.add(tipo)
    db.session.commit()

    tipo_ids={tipo.name: tipo.id for tipo in Tipo.query.all()}

    equipos_data={
        'Video':['Proyectores','Proyectores laser','Pantalla a medida'],
        'Iluminacion':['Luces roboticas','Luces manuales','Lueces locas'],
        'Audio': ['Bocina JBL','Bocina bose','Bocina hola']
    }

    for tipo_name,equipos in equipos_data.items():
        tipo_id=tipo_ids.get(tipo_name)
        if tipo_id:
            for equipo_name in equipos:
                equipo=Equipo(name=equipo_name,tipo_id=tipo_id)
                db.session.add(equipo)
    db.session.commit()

    return jsonify({"msg":"Created"}),200
