from django.shortcuts import render
from .forms import employeeform
# Create your views here.
def home(request):
    form=employeeform()
    return render(request,'index.html',{'form':form})

