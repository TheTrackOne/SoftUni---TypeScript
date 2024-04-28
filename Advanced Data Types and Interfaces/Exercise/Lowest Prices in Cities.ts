interface PriceInfo {
    town: string;
    price: number;
}

function findLowestPrice(data: string[]): void {
    const products: Map<string, PriceInfo> = new Map();

    for (const entry of data) {
        const [town, product, priceStr] = entry.split(" | ");
        const price = parseFloat(priceStr);

        if (products.has(product)) {
            const existingPriceInfo = products.get(product)!;
            if (price < existingPriceInfo.price) {

                products.set(product, { town, price });
            }
        } else {
  
            products.set(product, { town, price });
        }
    }

    for (const [product, priceInfo] of products.entries()) {
        console.log(`${product} -> ${priceInfo.price} (${priceInfo.town})`);
    }
}

const inputData: string[] = [
    'Sample Town | Sample Product | 1000', 
    'Sample Town | Orange | 2', 
    'Sample Town | Peach | 1', 
    'Sofia | Orange | 3', 
    'Sofia | Peach | 2', 
    'New York | Sample Product | 1000.1', 
    'New York | Burger | 10'
];

findLowestPrice(inputData);

