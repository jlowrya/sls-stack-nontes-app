import stripePackage from "stripe";
import handler from "./libs/handler-lib";
import { calculateCost } from "./libs/billing-lib";

export const main = handler(async (event, context) => {
    const {storage, source} = JSON.parse(event.body);
    console.log('STORAGE ', storage);
    console.log('SOURCE ',source );
    const amount = calculateCost(storage);
    console.log('AMOUNT ', amount);
    const description = "Scratch charge";
    console.log('DESCRIPTION ', description);

    //load our secret key from the environment variables
    const stripe = stripePackage(process.env.stripeSecretKey);

    await stripe.charges.create({
        source,
        amount,
        description,
        currency: "usd",
    });
    return {status: true};
});