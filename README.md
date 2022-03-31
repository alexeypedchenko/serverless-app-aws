*[markdown guide](https://www.markdownguide.org/basic-syntax/)*

# Развертывание API в AWS Lambda и API Gateway с помощью Claudia

## Создает и развертывает новую функцию Lambda.

``claudia create --region eu-central-1 --api-module api``

``eu-central-1`` \
Все доступные регионы перечислены в официальной документации [AWS](http://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region).

``api`` \
Файл api.js служит точкой входа в наш API. Claudia автоматически доба- вит расширение .js, поэтому укажите имя точки входа как api, без расширения.

Удалить проект:
``claudia destroy``

***

## Environment variables to configure the AWS CLI
[How to set environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)

```
$ export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
$ export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
$ export AWS_DEFAULT_REGION=us-west-2
```

***

## Создание таблицы DynamoDB с помощью AWS CLI

```
aws dynamodb create-table --table-name pizza-orders --attribute-definitions AttributeName=orderId,AttributeType=S --key-schema AttributeName=orderId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region eu-central-1 --query TableDescription.TableArn --output text
```

--table-name pizza-orders - Создание таблицы pizza-orders с помощью AWS CLI. \
--attribute-definitions AttributeName=orderId,AttributeType=S - Определение атрибута, сообщающее базе данных DynamoDB, что первичный ключ имеет строковый тип (S). \
--key-schema AttributeName=orderId,KeyType=HASH - Определениесхемыключа. \
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 - Определениесхемыключа пропускной способности (чтения и записи)длятаблицы DynamoDB. \
--region eu-central-1 - Выбор региона для таблицы DynamoDB \
--query TableDescription.TableArn --output text - По результатам вернуть имя ресурса таблицы(Amazon ResourceName,ARN), чтобы убедиться, что таблица создана

Команда для вывода списка всех элементов из таблицы pizza-orders:
``aws dynamodb scan --table-name pizza-orders --region eu-central-1 --output json``

***

## Configuration basics
[cli-configure-quickstart](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

***
