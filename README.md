# Wisdom

![wisdom-top](https://raw.githubusercontent.com/Nexus0831/GitHub-images/master/wisdom/wisdom-top.png)

個人の知見を記録できる。Webアプリ。   
知見の記録はMarkdownで記述する。
Markdownエディターも自作した。
バックエンドは基本的なサーバレスで実装。
リリースも想定したが、S3のウェブサイトのホスティングでhttps通信を行うには、自分でドメインを取得している必要があるため断念。
個人的な満足度は100点中80点ほど

## 使用技術
### フロント側
- React
- Redux
- immutable.js
- CSSinJS

### バックエンド側
- daynamoDB(AWS)
- lambda(AWS)
- APIGateWay(AWS)

## デザイン
背景に大きく画像を使用したかったため、独自のデザインにした。
やはり理にかなっていないデザインいなってしまったため、これからは大人しく**マテリアルデザイン**で行こうと思う。
