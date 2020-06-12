# direflow-lit-example

### Start Example

```console
cd lit-consumer
npm install
npm start
```
Server will be running on localhost:8080

The lit consumer is located in `lit-consumer/src/index.js`  
Make any modifications needed.

### Update Direflow Component
```console
cd direflow-lit
npm install
```

Make any changes to the component

```console
npm run build
cp ./build/direflowBundle.js ../lit-consumer/public/direflowBundle.js
```
