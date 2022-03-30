*[markdown guide](https://www.markdownguide.org/basic-syntax/)*

# Развертывание API в AWS Lambda и API Gateway с помощью Claudia

## Создает и развертывает новую функцию Lambda.

``claudia create --region eu-central-1 --api-module api``

``eu-central-1`` \
Все доступные регионы перечислены в официальной документации [AWS](http://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region).

``api`` \
Файл api.js служит точкой входа в наш API. Claudia автоматически доба- вит расширение .js, поэтому укажите имя точки входа как api, без расширения.

***

## Environment variables to configure the AWS CLI
[How to set environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)

```
$ export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
$ export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
$ export AWS_DEFAULT_REGION=us-west-2
```

***
