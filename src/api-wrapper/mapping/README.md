# IMPORTANT

Mapping is very important for handling an api. If you are using an api and getting data, it's very important to map values you might get from the api to values.

For instance, say you get a value from an api endpoint that is just a number, like maybe hotelid, and the hotelid corresponds to the name of that hotel. What you would do in a file is maybe name it hotelid.json and inside you'd put something like this (example from './example.json'):

![alt text](https://github.com/JDNorman/ApplicationBotTemplate/blob/main/images/hotels.png)

The `index.ts` is where all of these mapped values are handled. You need to import your values from each file and handle them there. More instructions are in `index.ts`.

If there are any values that you would export as an array, you need to create a new ts file and create the object and export it. There is an example in `states.ts`. Here you can see how you might export an array of objects.
