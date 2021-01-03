from . import models


# The resolver that fetches all items
def get_items(_, info):
    try:
        items = [item.to_dict() for item in models.Item.objects.all()]
        return success(items=items)
    except:
        return error('Could not fetch items.')


# The resolver that handles item creation
def new_item(_, info, name, price):
    try:
        item = models.Item.objects.create(name=name, price=price)
        return success(item)
    except:
        return error('Could not create item.')


# THe resolver that handles item deletion
def delete_item(_, info, id):
    try:
        item = models.Item.objects.get(pk=id)
        item.delete()
        return success()
    except:
        return error('Could not delete item.')


# The resolver that handles item updates
def update_item(_, info, id, name=None, price=None):
    try:
        item = models.Item.objects.get(pk=id)
        if name is not None:
            item.name = name
        if price is not None:
            item.price = price
        item.save()
        return success(item)
    except:
        return error('Could not update item.')


# Creates a successful response payload
def success(item=None, items=None):
    payload = { 'success': True, }
    if item is not None:
        payload['item'] = item.to_dict()
    if items is not None:
        payload['items'] = items
    return payload


# Creates an erroneous response payload
def error(msg):
    return {
        'success': False,
        'error': msg,
    }