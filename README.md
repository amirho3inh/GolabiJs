# GolabiJs
add features to jquery easily

[![jQuery version][jquery-version]](#)
[![download size][download-size]](#)

[jquery-version]: https://img.shields.io/badge/jQuery-1.0%2B-brightgreen.svg
[download-size]: https://img.shields.io/badge/download-1kb-brightgreen.svg

Requirements
------------
features requires the following to run:

  * [jQuery][jQuery] 1.0+


[jQuery]: https://jQuery.com/

Usage
-----

to put element in the center of page:
```js
$('#elm').center();
```

to put element in the center of a box element:
```js
$('#elm').center('#box');
```

convert english digit to persian digit:
```js
toPersianNum(1); //output: ۱
```

convert persian digit to english digit:
```js
toEnglishNum(۱); //output: 1
```

get url parameter:
```js
//url: http://www.example.com/?id=51&name=test
getUrlParameter('id'); //output: 51
getUrlParameter('name'); //output: test
```

get file size format:
```js
formatBytes(51250000, 2); //output: 51.25 MB
formatBytes(51250000, 1); //output: 51.2 MB
```

mobile detect:
```js
isMobile(); //output: if has True then open page in mobile
```

mobile and tablet detect:
```js
isMobileAndTablet(); //output: if has True then open page in mobile or tablet
```

search value in json: <br>
example:<br>
keyInput = title<br>
valueInput = test2<br>
json = [{id:1,title:'test'}, {id:2,title:'test2'}]<br>
result = {id:2,title:'test2'}<br>
```js
searchInJson(keyInput,valueInput,json); //output: result json
```

call function and count up element class .count
```js
countUp();
```


License
-------
GolabiJs is licensed under the [MIT](#) license.  
Copyright &copy; 2018, Amirhossein Hashemi
