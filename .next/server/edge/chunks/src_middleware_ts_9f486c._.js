(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_middleware_ts_9f486c._.js", {

"[project]/src/middleware.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>config,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$middleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/middleware.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$middleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withAuth"](function middleware(req) {
// No additional logic for now
}, {
    callbacks: {
        authorized: ({ token })=>!!token
    }
});
const config = {
    matcher: [
        '/dashboard/:path*'
    ]
};

})()),
}]);

//# sourceMappingURL=src_middleware_ts_9f486c._.js.map