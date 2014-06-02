Базовый конфиг с русской морфологией для elasticsearch
======================================================


Установка
---------
1. Установить плагины:

- Russian morphology отсюда: https://github.com/imotov/elasticsearch-analysis-morphology
- elasticsearch-HQ отсюда: http://www.elastichq.org/support_plugin.html

Код::

    bin/plugin -install analysis-morphology -url http://dl.bintray.com/content/imotov/elasticsearch-plugins/org/elasticsearch/elasticsearch-analysis-morphology/1.2.0/elasticsearch-analysis-morphology-1.2.0.zip
    bin/plugin -install royrusso/elasticsearch-HQ

2. Докачать оставшиеся бинарники (директории bin и lib из оригинального дистрибутива).
В текущем репозитории отсутствуют директории bin и lib, получить их можно так::

   wget http://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.2.0.tar.gz
   tar xf elasticsearch-1.2.0.tar.gz
   cd elasticsearch-1.2.0

3. Выполнить bin/elasticsearch
