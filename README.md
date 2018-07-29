# Jin2gram

Cloning Instagram with Python Django and React.

## Note

### 1. [Try and Except in Python](http://www.pythonforbeginners.com/error-handling/python-try-and-except)

```python
try:
    follow_to_user = models.User.objects.get(id=user_id)
    return Response(status=status.HTTP_200_OK)

except models.User.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
```

### 2. [Limiting QuerySets](https://docs.djangoproject.com/en/1.11/topics/db/queries/#limiting-querysets)

```python
# 5개 오브젝트만 가져온다.
models.Users.objects.all()[:5]
```

### 3. [QuerySet API reference: order-by](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#order-by)

```python
# 최근 가입한 순서대로
last_five = models.User.objects.all().order_by('-date_joined')[:5]
```

### 4. [add() documentation](https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.add)

```python
user.following.add(follow_to_user)
user.save()
```

### 5. [remove() documentation](https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.remove)

```python
user.following.remove(follow_to_user)
```

#### .delete()와 .remove()의 차이점

`.delete()` deletes an object from the database. 
`.remove()` deletes the many to many relationship between models.

### 6. Serializer에서 many=True

다수의 데이터 queryset 형태를 serializer화 하고자 할 때 사용한다.

```python
images = image_serializer.UserProfileImageSerializer(many=True)
```

### 7. [Class-Based Views vs. Function-Based Views](https://simpleisbetterthancomplex.com/article/2017/03/21/class-based-views-vs-function-based-views.html)

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

### 8. Customizing Admin page

Admin > Image 목록에서 이미지 수정링크를 다른 필드에도 적용시킬 때 아래와 같이 옵션을 추가한다.

```python
list_displya_links = ['location', 'caption']
```

- [ModelAdmin옵션 - 초보몽키의 개발공부로그](https://wayhome25.github.io/django/2017/03/22/django-ep8-django-admin/)

### 9. [Requests - Django REST Framework](http://www.django-rest-framework.org/api-guide/requests/)

request 객체에서 얻을 수 있는 정보

```python
request.data
request.user
request.query_params
```

### 10. Deep relationship 검색하는 방법

```python
title: 'hello',
location: 'bogota',
creator: (
    User:
        id: 1,
        username: 'jin2'
)

models.Images.objects.filter(location='bogota')
models.Images.objects.filter(creator__username='jin2') # Search deep relationship
```

#### [Field lookups](https://docs.djangoproject.com/en/1.11/topics/db/queries/#field-lookups)

```python
# jin으로 정확히 일치
models.Images.objects.filter(creator__username__exact='jin')

# 대소문자 구분없이 jin, Jin으로 일치
models.Images.objects.filter(creator__username__iexact='jin')

# jin이 포함되어 있으면
models.Images.objects.filter(creator__username__contains='jin')

# 대소문자 구분없이 jin이 포함되어 있으면
models.Images.objects.filter(creator__username__icontains='jin')
```

### 11. [QuerySet API reference: distinct()](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#distinct)

중복된 데이터를 제거한다.

```python
image_list = models.Image.objects.filter(tags__name__in=hashtag_array).distinct()
```

### 12. Django Migration

- [05) 마이그레이션 파일 제거](https://wikidocs.net/9926)
- [Django 기본 05 - Migration](https://wayhome25.github.io/django/2017/03/20/django-ep6-migrations/)

### 13. 데이터 베이스 추가와 삭제 명령어

```terminal
CREATE DATABASE AAA;
DROP DATABASE AAA;
```

### 14. Python의 함수

[파이썬 함수의 구조](https://wikidocs.net/24)

```python
def 함수명(매개변수):
    <수행할 문장1>
    <수행할 문장2>
    ...
```

### 15. [QuerySet API reference: values()](https://docs.djangoproject.com/en/1.11/ref/models/querysets/#values)

Django document example

```python
>>> Blog.objects.values()
<QuerySet [{'id': 1, 'name': 'Beatles Blog', 'tagline': 'All the latest Beatles news.'}]>
>>> Blog.objects.values('id', 'name')
<QuerySet [{'id': 1, 'name': 'Beatles Blog'}]>
```

작성했던 코드

```python
likes = models.Like.objects.filter(img__id=image_id)

# likes 리스트에서 creator_id만 추출하여 리스트를 뽑을 수 있다.
like_creator_ids = likes.values('creator_id')
```

### 16. 부분 수정(put)할 때 필드 처리

#### [Serializers: Partial updates](http://www.django-rest-framework.org/api-guide/serializers/#partial-updates)

serializer 파일에서 옵션 처리

```python
file = serializers.fileField(required=false)
```

view 파일에서 옵션 처리

```python
serializer = serializers.InputImageSerializer(image, data=request.data, patial=True)
```

### 17. `serializer.is_valid()`

[Django REST Framework - Serializers](http://brownbears.tistory.com/71)

serializer는 받은 데이터의 유효성을 검사한 다음, 복잡한 타입으로 형변환을 할 수 있도록 serialization을 제공한다.

```python
serializer.is_valid()
serializer.errors
```

데이터를 사용하기 전에 `is_valid()` 함수를 호출해야 한다. 만약 validation error가 발생한다면, `.errors` 속성을 사용해 에러를 확인할 수 있다.

### 18. [Serializer fields: ReadOnlyField Documentations](http://www.django-rest-framework.org/api-guide/fields/#readonlyfield)

읽기 전용 필드로 모델 인스턴스를 업데이트할 때 사용할 수 없다.

```python
post_count = serializer.ReadOnlyField()
```

### 19. [REST framework JWT Auth](http://getblimp.github.io/django-rest-framework-jwt/)

```python
pipenv install djangorestframework-jwt
```

base.py 하단에 아래 내용 추가

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}
```

### 20. [Django Rest Auth Documentation](http://django-rest-auth.readthedocs.io/en/latest/)

로그인, 로그아웃, 회원가입에 필요한 인증 라이브러리

### 21. [Django Rest Auth: Social Authentication facebook](http://django-rest-auth.readthedocs.io/en/latest/installation.html#facebook)

- base.py의 THIRD_PARTY_APPS에 추가 `allauth.socialaccount.providers.facebook`
- users 모델에 class, url 추가
- Facebook developers에서 app 등록(Add ID, Secret key 생성)
- Admin 페이지에서 Social application 추가(Add ID, Secret key 입력)
- [Test access_token](https://developers.facebook.com/tools/accesstoken/)을 이용하여 로그인

## Link

- [정규표현식 학습](https://regexone.com/)
- [django-taggit: hashtag를 쉽게 적용하기 위해](https://github.com/alex/django-taggit)