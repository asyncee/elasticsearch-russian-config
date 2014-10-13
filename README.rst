Базовый конфиг с русской морфологией для elasticsearch
======================================================

Это базовый конфиг, содержащий базовые настройки для работы с
русским текстом. По-умолчанию поставляется кастомный набор
анализаторов и фильтров с вменяемыми настройками По-умолчанию
(см. config/elasticsearch.yml).

Вместе с конфигом поставляются плагины в директории `plugins`.
После установки актуальной версии elasticsearch, плагины
рекомендуется обновить для получения наиболее свежей версии.


Установка
---------

1. Докачать оставшиеся бинарники (директории bin и lib из
оригинального дистрибутива).
В текущем репозитории отсутствуют директории bin и lib,
получить их можно так::

   wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.3.4.tar.gz
   tar xf elasticsearch-1.3.4.tar.gz
   cd elasticsearch-1.3.4

2. Установить плагины:

- Russian morphology отсюда: https://github.com/imotov/elasticsearch-analysis-morphology
- elasticsearch-HQ отсюда: http://www.elastichq.org/support_plugin.html

Код::

    bin/plugin -install analysis-morphology -url http://dl.bintray.com/content/imotov/elasticsearch-plugins/org/elasticsearch/elasticsearch-analysis-morphology/1.2.0/elasticsearch-analysis-morphology-1.2.0.zip
    bin/plugin -install royrusso/elasticsearch-HQ

3. Выполнить bin/elasticsearch
