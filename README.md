# Jin2gram
Cloning Instagram with Python Django and React.

## Note

### [Try and Except in Python](http://www.pythonforbeginners.com/error-handling/python-try-and-except)

```python
try:
    follow_to_user = models.User.objects.get(id=user_id)
    return Response(status=status.HTTP_200_OK)

except models.User.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
```

### [Limiting QuerySets](https://docs.djangoproject.com/en/1.11/topics/db/queries/#limiting-querysets)

```python
# 5개 오브젝트만 가져온다.
models.Users.objects.all()[:5]
```

### [QuerySet API reference: order-by](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#order-by)

```python
# 최근 가입한 순서대로
last_five = models.User.objects.all().order_by('-date_joined')[:5]
```

### [add() documentation](https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.add)

```python
user.following.add(follow_to_user)
user.save()
```

### [remove() documentation](https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.remove)

```python
user.following.remove(follow_to_user)
```

#### .delete()와 .remove()의 차이점
`.delete()` deletes an object from the database. 
`.remove()` deletes the many to many relationship between models.

### Serializer에서 many=True
다수의 데이터 queryset 형태를 serializer화 하고자 할 때 사용한다.

```python
images = image_serializer.UserProfileImageSerializer(many=True)
```

### [Class-Based Views vs. Function-Based Views](https://simpleisbetterthancomplex.com/article/2017/03/21/class-based-views-vs-function-based-views.html)

- APIView를 확장해서 편리하게 쓴다는 점이 제일 큰 차이점인 것 같다.

```python
class FollowUsers(APIView):
    def post(self, request, user_id, format=None):
        # .....

        request.data
```

```python
def FollowUsers(request, user_id):
    if request.method == 'post':
        # .....

        request.POST.get('key', value)
```

## Link
- [정규표현식 학습](https://regexone.com/)