from rest_framework import serializers
from .models import Dato


class DatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dato
        fields = '__all__'
        read_only_fields = ('id', 'fecha_creacion', 'fecha_edicion')
        
    def to_representation(self, instance):
        print('SENSOR ------------------')
        print(instance.sensor)
        obj = super().to_representation(instance)
        print('DATOS DE LA INSTANCIA DATOS')
        print(obj)
        return obj