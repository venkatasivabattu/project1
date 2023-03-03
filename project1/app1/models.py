from django.db import models

class employee(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    password=models.CharField(max_length=10)

    class Meta:
        db_table='employee'
# Create your models here.
