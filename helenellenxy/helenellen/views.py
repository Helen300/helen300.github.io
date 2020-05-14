from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
	context = {}
	# for some reason cannot be templates/helenellen/home.html
	return render(request, 'helenellen/index.html', context)
