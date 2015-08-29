Базовый конфиг с русской морфологией для elasticsearch
======================================================

Это базовый конфиг, содержащий основные настройки для работы с
русским текстом. По-умолчанию поставляется кастомный набор
анализаторов и фильтров с вменяемыми настройками по-умолчанию
(см. config/elasticsearch.yml).

Текущая версия конфигурации актуальна для ``elasticsearch 1.7.1``,
но так как elasticsearch.yml практически не изменяется, то
данная конфигурация с большой долей вероятности будет совместима
и с более новыми версиями.

Вместе с конфигом поставляются плагины в директории `plugins`.
После установки актуальной версии elasticsearch, плагины
рекомендуется обновить для получения наиболее свежей версии.


Установка
---------

1. Докачать оставшиеся бинарники (директории bin и lib из
оригинального дистрибутива).
В текущем репозитории отсутствуют директории bin и lib,
получить их можно так::

   wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.1.tar.gz
   tar xf elasticsearch-1.7.1.tar.gz
   cd elasticsearch-1.7.1

2. Установить плагины:

- Russian morphology отсюда: https://github.com/imotov/elasticsearch-analysis-morphology
- elasticsearch-HQ отсюда: http://www.elastichq.org/support_plugin.html

Код::

    bin/plugin -install analysis-morphology -url http://dl.bintray.com/content/imotov/elasticsearch-plugins/org/elasticsearch/elasticsearch-analysis-morphology/1.2.0/elasticsearch-analysis-morphology-1.2.0.zip
    bin/plugin -install royrusso/elasticsearch-HQ

3. Выполнить bin/elasticsearch


Использование
-------------

Минимально необходимые действия для использования анализаторов:

    - описание маппинга индексируемого документа
    - создание индекса
    - индексация документов с использованием анализатора ``index_ru``
    - поиск с использованием анализатора ``search_ru``

Для того, чтобы использовать эти анализаторы, рекомендуется явно
указать их в маппинге. Ознакомиться со способами указания
анализаторов для конкретного документа, маппинга, индекса или
всей ноды в целом, можно в официальной
документации: analysis_.

Пример явного указания анализаторов в маппинге:

.. code::

    curl -XPUT 'http://localhost:9200/test_index?pretty' -d '{
      "mappings": {
        "test_mapping": {
          "properties": {
            "description": {
              "index_analyzer": "index_ru",
              "search_analyzer": "search_ru",
              "type": "string"
            },
            "name": {
              "index_analyzer": "index_ru",
              "search_analyzer": "search_ru",
              "type": "string"
            },
            "is_active": {
              "type": "boolean"
            },
            "pk": {
              "type": "integer"
            },
            "slug": {
              "index": "not_analyzed",
              "type": "string"
            }
          }
        }
      }
    }'


После создания индекса, указания маппинга и индексирования
документов, можно проверить работу анализаторов, выполнив запросы:


.. code::

    http://127.0.0.1:9200/test_index/_analyze?analyzer=search_ru&text=<любой ваш текст>
    http://127.0.0.1:9200/test_index/_analyze?analyzer=index_ru&text=<любой ваш текст>


.. _analysis: https://www.elastic.co/guide/en/elasticsearch/guide/current/_controlling_analysis.html

