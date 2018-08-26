# React

## 1. react 설치

## 2. react eject

## 3. scss 사용 설정(dev, prod 둘 다 설정 필요)

```js
// before
test: /\.css$/,

// after
test: /\.(css|scss|sass)$/,

// sass-loader 추가
{
loader: require.resolve('sass-loader'),
    options: {
        sourcemap: true
    }
},

// postcss 소스맵 설정
sourcemap: ture
```

### 웹팩의 로더들은 아래에서 위로 로딩을 한다.

1. 'sass-loader'를 이용하여 sass 파일을 css 로 변환한다.
2. 'postcss-loader'를 이용하여 브라우저 호환성 부여한다.
3. 'css-loader'는 css 파일을 만든다.
4. 'style-loader'는 `<head>`안에 스타일 추가한다.

development 환경에서는 빠른 새로고침을 위해 style-loader 를 사용하지만,
production 환경에서는 다른 로더들이 실패하게 되면 style-loader(fallback 으로)를 사용하게 설정이 되었다.

## [CSS 모듈](https://github.com/gajus/react-css-modules)

**css-loader** 옵션을 추가한다.

```js
modules: true,

// css이름 구조를 변경하고 싶을 때
// [컴포넌트이름]__[class명]--[해쉬값]
localIdentName: "[name]__[local]--[hash:base64:5]",
```