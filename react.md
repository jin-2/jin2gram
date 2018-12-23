# React(Front end)

```console
yarn global add create-react-app
create-react-app frontend
cd frontend
yarn start
```

## 2-10 Serving Webpack Bundles with Django

1. Proxy the request from :3000 to :8000
    - :8000 -> django server
    - :3000 -> react server
    - 리액트에서 요청이 들어왔을 때 (localhost:3000/notifications/) 장고서버에서 내용을 받아와야 함으로, 서버를 우회하도록 설정한다.
    - package.json에서
        ```
        "proxy": "http://localhost:8000"
        ```
1. Install django-cors-headers [github](https://github.com/ottoyiu/django-cors-headers)
    - Django는 외부 요청을 허용하지 않기 때문에 React(:3000)에서 요청을 허용하기위해 설치하고 아래처럼 설정한다.
1. Add 'corsheaders' to INSTALLED_APPS
1. Add 'corsheaders.middleware.CoreMiddleware' before 'CommonMiddleware'
1. Add CORS_ORIGIN_ALLOW_ALL = True on base settings.
1. Make Django load the bundles as static files with 'str(ROOT_DIR.Path('frontend', 'build', 'static'))'
    - APPS_DIR.path('static') -> jin2gram/static 파일로 이동
    - ROOT_DIR -> root directory를 말함
    - react static 파일도 불러오도록 경로 설정
1. Create a view.py file on 'jin2gram' folder.
1. Create ReactAppView that reads the file.
    - 요청이 들어왔을 때 frontend/build/index.html 경로의 파일을 열고, 해당 파일을 return한다.
1. Add the ReactAppView as a URL.
