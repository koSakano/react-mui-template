# React MUI Template
このリポジトリは[Material UI](https://mui.com/)を用いたReact環境のテンプレートです。

# 使用方法
環境は`npm run dev`でポート5173に立ち上がります。
ビルドされたコードが欲しい場合は`npm run build`を行なってください。`dist`に生成されます。

storybookを用いたい場合は`npm run storybook`を行なってください。`.nvmrc`で指定したバージョンでは`NODE_OPTIONS=--openssl-legacy-provider`を`npm run storybook`の前に配置して行なってください。

testを行いたい場合は`npm run test`を行なってください。storybook内で行うテストはこのコマンドでは行われません。

コミットごとにhuskyが走って、変更があったファイルにprettierとeslintが走ります。無視したい場合は`.husky`配下を弄るか、`git commit --no-verify`で無視して実行してください(無視させるのはお勧めしません)。

# 使用ライブラリ
## 非同期通信
[axios](https://axios-http.com/docs/intro)を用いて行なっています。axiosは詳細に設定を行うことが多いため、`src/lib/axios`でラップしたものを利用するようにします。また、これらの依存関係をなるべく減らしたいため、`src/api`でのみ使用します。

## 状態管理
非同期な状態は[SWR](https://swr.vercel.app/ja)で、同期的な状態は[recoil](https://recoiljs.org/)で管理しています。これらを使用する際は`src/globalStates`に記述して、外部からの使用する際は`src/globalStates`から行います。これによってrecoilやswrのロジックの隠蔽を行うことができます。recoilのkeyは`src/globalStates`は以下の`recoilKeys`に保存しています。

## フォームのバリデーション
[react-hook-form](https://react-hook-form.com/get-started#schemavalidation)と[zod](https://github.com/colinhacks/zod)を用いて行います。大きなルールは現段階では用意していないです。

## ルーティング
[React Router](https://reactrouter.com/en/main)を用いています。`src/routes`でルーティングを行います。

## storybook
[storybook](https://storybook.js.org/)でcomponentsの動作確認や、[chromatic](https://www.chromatic.com/)を用いてUI Testsなどを行います。

## モック
storybookを使用する際にapiの[mock](https://mswjs.io/)が必要となってきます。これらはmswによって行います。
