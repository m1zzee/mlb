# app/routes.py
from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/index')
def index():
    return render_template('index.html', title='Металлы')

@main.route('/properties')
def properties():
    return render_template('properties.html', title='Общие свойства металлов')

@main.route('/chemical')
def chemical():
    return render_template('chemical.html', title='Химические свойства')

@main.route('/alloys')
def alloys():
    return render_template('alloys.html', title='Сплавы')

@main.route('/test')
def test():
    return render_template('test.html', title='Проверка знаний')