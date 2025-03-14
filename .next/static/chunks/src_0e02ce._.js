(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_0e02ce._.js", {

"[project]/src/lib/mongodb.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
const MONGODB_URI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MONGODB_URI;
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
        cached.promise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
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
"[project]/src/models/Product.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const productSchema = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema({
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
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].models.Product || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].model('Product', productSchema);

})()),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ProductsPage,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/mongodb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/models/Product.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './products-client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const metadata = {
    title: 'Products | KrishiUdyog',
    description: 'Browse our selection of high-quality agricultural products directly from farmers'
};
// Function to fetch products from the database
async function getProducts() {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find({}).sort({
            createdAt: -1
        }).lean();
        return JSON.parse(JSON.stringify(products));
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
async function ProductsPage() {
    const products = await getProducts();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](ProductsClient, {
        products: products
    }, void 0, false, {
        fileName: "<[project]/src/app/products/page.tsx>",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c = ProductsPage;
var _c;
__turbopack_refresh__.register(_c, "ProductsPage");

})()),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_0e02ce._.js.map