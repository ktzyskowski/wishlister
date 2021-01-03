from django.db import models


# This class represents the record of an item on the user's wishlist
class Item(models.Model):
    name = models.CharField(max_length=70)
    price = models.IntegerField()

    def to_dict(self):
        return {
            'id': self.pk,
            'name': self.name,
            'price': self.price,
        }
