module.exports = {

"[project]/src/lib/mongodb.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__mongoose__ = __turbopack_external_require__("mongoose", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
const MONGODB_URI = process.env.MONGODB_URI;
// Initialize the cached connection
const cached = global.mongoose || {
    conn: null,
    promise: null
};
// Set the global mongoose cache
if (!global.mongoose) {
    global.mongoose = cached;
}
async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__external__mongoose__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectDB;

})()),
"[project]/src/models/Product.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__mongoose__ = __turbopack_external_require__("mongoose", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const productSchema = new __TURBOPACK__external__mongoose__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a product name'
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'Please provide a product description'
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            'Please provide a product price'
        ],
        min: [
            0,
            'Price cannot be negative'
        ]
    },
    image: {
        type: String,
        required: [
            true,
            'Please provide a product image'
        ]
    },
    category: {
        type: String,
        required: [
            true,
            'Please provide a product category'
        ]
    },
    stock: {
        type: Number,
        required: [
            true,
            'Please provide stock quantity'
        ],
        min: [
            0,
            'Stock cannot be negative'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
// Update the updatedAt timestamp before saving
productSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});
const __TURBOPACK__default__export__ = __TURBOPACK__external__mongoose__["default"].models.Product || __TURBOPACK__external__mongoose__["default"].model('Product', productSchema);

})()),
"[project]/src/app/api/seed/route.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/web/exports/next-response.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/models/Product.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
// Sample products data
const products = [
    {
        name: 'Organic Wheat',
        description: 'High-quality organic wheat grown without pesticides. Perfect for making chapatis, bread, and other wheat-based products.',
        price: 29.99,
        image: '/images/Organic Wheat.jpg',
        category: 'grains',
        stock: 50
    },
    {
        name: 'Fresh Tomatoes',
        description: 'Ripe, juicy tomatoes grown in our greenhouse. Rich in lycopene and perfect for salads, curries, and sauces.',
        price: 4.99,
        image: '/images/Fresh Tomatos.jpg',
        category: 'vegetables',
        stock: 100
    },
    {
        name: 'Premium Coffee Beans',
        description: 'Arabica coffee beans from sustainable farms in the hills of South India. Medium roast with notes of chocolate and caramel.',
        price: 19.99,
        image: '/images/Premium Coffee Beans.jpg',
        category: 'beverages',
        stock: 30
    },
    {
        name: 'Organic Honey',
        description: 'Pure, natural honey collected from beehives located in pristine forests. No additives or preservatives.',
        price: 12.99,
        image: '/images/Organic Honey.jpg',
        category: 'condiments',
        stock: 25
    },
    {
        name: 'Fresh Apples',
        description: 'Crisp, sweet apples from Himalayan orchards. Rich in fiber and antioxidants.',
        price: 3.99,
        image: '/images/Fresh Apples.jpg',
        category: 'fruits',
        stock: 75
    },
    {
        name: 'Basmati Rice',
        description: 'Premium long-grain basmati rice with a delightful aroma. Perfect for biryanis and pulao.',
        price: 15.99,
        image: '/images/Basmati Rice.jpg',
        category: 'grains',
        stock: 60
    },
    {
        name: 'Fresh Spinach',
        description: 'Nutrient-rich spinach leaves, freshly harvested from our farms. High in iron and vitamins.',
        price: 2.49,
        image: '/images/Fresh Spinach.jpg',
        category: 'vegetables',
        stock: 80
    },
    {
        name: 'Organic Turmeric Powder',
        description: 'Organically grown turmeric, ground into fine powder. Known for its anti-inflammatory properties.',
        price: 5.99,
        image: '/images/Organic Turmeric Powder.jpg',
        category: 'spices',
        stock: 40
    },
    {
        name: 'Fresh Oranges',
        description: 'Juicy, sweet oranges rich in Vitamin C. Perfect for juicing or eating fresh.',
        price: 4.49,
        image: '/images/Fresh Oranges.jpg',
        category: 'fruits',
        stock: 65
    },
    {
        name: 'Organic Milk',
        description: 'Fresh, organic milk from grass-fed cows. No hormones or antibiotics.',
        price: 3.29,
        image: '/images/Organic Milk.jpg',
        category: 'dairy',
        stock: 30
    }
];
async function GET() {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
        // Clear existing products
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].deleteMany({});
        // Insert new products
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].insertMany(products);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].json({
            success: true,
            message: 'Database seeded successfully with 10 products',
            count: products.length
        });
    } catch (error) {
        console.error('Error seeding database:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].json({
            success: false,
            error: error.message || 'Failed to seed database'
        }, {
            status: 500
        });
    }
}

})()),
"[project]/.next-internal/server/app/api/seed/route/actions.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),

};

//# sourceMappingURL=_74cec4._.js.map