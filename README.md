# direflow-lit-example

# Scenario
- direflow-lit component is rendered based on selected task (Top buttons)
- direflow-lit expects 2 props 1. id: string 2. sampleList: string[]
- By default 1st task is selected and direflow-lit is renders/mounted
- Now you select 2nd Task you can see Id (string) is being display but sampleList(object) not.
- But if you click on the 2nd task button you will get the object props
- But when you see the console data is being fetched from store just before rendering the component

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
