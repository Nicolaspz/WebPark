/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apiClients */ \"./services/apiClients.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@sujeitopizza.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch  {\n        console.log(\"erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    const inactivityTimeout = 15 * 60 * 1000;\n    let inactivityTimer;\n    const resetInactivityTimer = ()=>{\n        clearTimeout(inactivityTimer);\n        inactivityTimer = setTimeout(()=>{\n            signOut(); // Chama a função de logout após o tempo de inatividade\n        }, inactivityTimeout);\n    };\n    const handleUserInteraction = ()=>{\n        resetInactivityTimer();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkToken = async ()=>{\n            try {\n                const { \"@sujeitopizza.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n                if (token) {\n                    const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.get(\"/auth/me\");\n                    const { id, nome, telefone, role } = response.data;\n                    setUser({\n                        id,\n                        nome,\n                        telefone,\n                        role\n                    });\n                //console.log(\"Logado\");\n                //console.log(\"organization->\",organization);\n                }\n            } catch (error) {\n                console.log(\"Erro ao verificar o token\", error);\n                signOut();\n            }\n        };\n        checkToken(); // Verifica o token ao carregar o componente\n        // Adiciona event listeners para redefinir o temporizador em interações do usuário\n        window.addEventListener(\"mousemove\", handleUserInteraction);\n        window.addEventListener(\"mousedown\", handleUserInteraction);\n        window.addEventListener(\"keydown\", handleUserInteraction);\n        // Inicia o temporizador quando o componente é montado\n        resetInactivityTimer();\n        return ()=>{\n            // Remove os event listeners e limpa o temporizador quando o componente é desmontado\n            window.removeEventListener(\"mousemove\", handleUserInteraction);\n            window.removeEventListener(\"mousedown\", handleUserInteraction);\n            window.removeEventListener(\"keydown\", handleUserInteraction);\n            clearTimeout(inactivityTimer);\n        };\n    // Restante do seu código...\n    }, []);\n    async function signIn({ telefone, password }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post(\"/auth/login\", {\n                telefone,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logado com sucesso!\");\n            //console.log(\"Response-> \",response.data)\n            const { id, nome, token, role } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@sujeitopizza.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" // Quais caminhos terao acesso ao cookie\n            });\n            setUser({\n                id,\n                nome,\n                telefone,\n                role\n            });\n            console.log(user);\n            //Passar para proximas requisiçoes o nosso token\n            _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n            if (user.role === \"admin\") {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n            } else {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/pedidos\");\n            }\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao Logar\");\n        }\n    }\n    async function signUp({ nome, telefone, password }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post(\"/auth/register\", {\n                nome,\n                telefone,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Cadastrado com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao se Cadastrar\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Documents\\\\workspace-spring\\\\ServeServ\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 182,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDRkEsdURBQVcsQ0FBQztZQUNkO1FBSUYsRUFBQyxPQUFNd0MsS0FBSTtZQUNUekMsaURBQUtBLENBQUM2QixLQUFLLENBQUM7UUFDZDtJQUNGO0lBR0EsZUFBZWEsT0FBTyxFQUFFakIsSUFBSSxFQUFFQyxRQUFRLEVBQUVRLFFBQVEsRUFBYztRQUM1RCxJQUFHO1lBRUQsTUFBTVosV0FBVyxNQUFNcEIscURBQUdBLENBQUNpQyxJQUFJLENBQUMsa0JBQWtCO2dCQUNoRFY7Z0JBQ0FDO2dCQUNBUTtZQUNGO1lBRUFsQyxpREFBS0EsQ0FBQ29DLE9BQU8sQ0FBQztZQUVkbkMsdURBQVcsQ0FBQztRQUVkLEVBQUMsT0FBTXdDLEtBQUk7WUFDVHpDLGlEQUFLQSxDQUFDNkIsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDMUIsWUFBWXdDLFFBQVE7UUFBQ0MsT0FBTztZQUFFakM7WUFBTUU7WUFBaUJvQjtZQUFRN0I7WUFBU3NDO1FBQU87a0JBQzNFaEM7Ozs7OztBQUdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZGVzdHJveUNvb2tpZSxzZXRDb29raWUscGFyc2VDb29raWVzfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaUNsaWVudHMnO1xyXG5cclxuXHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICB1c2VyOiBVc2VyUHJvcHM7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIHNpZ25JbjogKGNyZWRlbnRpYWxzOiBTaWduSW5Qcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBzaWduT3V0OiAoKSA9PiB2b2lkO1xyXG4gIHNpZ25VcDogKGNyZWRlbnRpYWxzOiBTaWduVXBQcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxudHlwZSBVc2VyUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBub21lOiBzdHJpbmc7XHJcbiAgdGVsZWZvbmU6IHN0cmluZztcclxuICByb2xlOnN0cmluZztcclxuICBcclxuICBcclxufVxyXG5cclxudHlwZSBTaWduSW5Qcm9wcyA9IHtcclxuICB0ZWxlZm9uZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgU2lnblVwUHJvcHMgPSB7XHJcbiAgbm9tZTogc3RyaW5nO1xyXG4gIHRlbGVmb25lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICByb2xlOnN0cmluZyxcclxuICBcclxufVxyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpe1xyXG4gIHRyeXtcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnQHN1amVpdG9waXp6YS50b2tlbicpXHJcbiAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgfWNhdGNoe1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm8gYW8gZGVzbG9nYXInKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKXtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHM+KClcclxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7XHJcbiAgY29uc3QgaW5hY3Rpdml0eVRpbWVvdXQgPSAxNSAqIDYwICogMTAwMDsgXHJcbiAgbGV0IGluYWN0aXZpdHlUaW1lcjogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG4gIGNvbnN0IHJlc2V0SW5hY3Rpdml0eVRpbWVyID0gKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KGluYWN0aXZpdHlUaW1lcik7XHJcbiAgICBpbmFjdGl2aXR5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2lnbk91dCgpOyAvLyBDaGFtYSBhIGZ1bsOnw6NvIGRlIGxvZ291dCBhcMOzcyBvIHRlbXBvIGRlIGluYXRpdmlkYWRlXHJcbiAgICB9LCBpbmFjdGl2aXR5VGltZW91dCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlckludGVyYWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmVzZXRJbmFjdGl2aXR5VGltZXIoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gIHtcclxuICAgIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyAnQHN1amVpdG9waXp6YS50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9hdXRoL21lJyk7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLCBub21lLCB0ZWxlZm9uZSwgcm9sZX0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIG5vbWUsXHJcbiAgICAgICAgICAgIHRlbGVmb25lLFxyXG4gICAgICAgICAgICByb2xlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMb2dhZG9cIik7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9yZ2FuaXphdGlvbi0+XCIsb3JnYW5pemF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvIGFvIHZlcmlmaWNhciBvIHRva2VuXCIsIGVycm9yKTtcclxuICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tUb2tlbigpOyAvLyBWZXJpZmljYSBvIHRva2VuIGFvIGNhcnJlZ2FyIG8gY29tcG9uZW50ZVxyXG5cclxuICAgIC8vIEFkaWNpb25hIGV2ZW50IGxpc3RlbmVycyBwYXJhIHJlZGVmaW5pciBvIHRlbXBvcml6YWRvciBlbSBpbnRlcmHDp8O1ZXMgZG8gdXN1w6FyaW9cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcblxyXG4gICAgLy8gSW5pY2lhIG8gdGVtcG9yaXphZG9yIHF1YW5kbyBvIGNvbXBvbmVudGUgw6kgbW9udGFkb1xyXG4gICAgcmVzZXRJbmFjdGl2aXR5VGltZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBSZW1vdmUgb3MgZXZlbnQgbGlzdGVuZXJzIGUgbGltcGEgbyB0ZW1wb3JpemFkb3IgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBkZXNtb250YWRvXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckludGVyYWN0aW9uKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgICBjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVyKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVzdGFudGUgZG8gc2V1IGPDs2RpZ28uLi5cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oeyB0ZWxlZm9uZSwgcGFzc3dvcmQgfTogU2lnbkluUHJvcHMpe1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvYXV0aC9sb2dpbicsIHtcclxuICAgICAgICB0ZWxlZm9uZSxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9KVxyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiTG9nYWRvIGNvbSBzdWNlc3NvIVwiKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIlJlc3BvbnNlLT4gXCIscmVzcG9uc2UuZGF0YSlcclxuICAgICAgY29uc3QgeyBpZCwgbm9tZSwgdG9rZW4scm9sZX0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ0BzdWplaXRvcGl6emEudG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsIC8vIEV4cGlyYXIgZW0gMSBtZXNcclxuICAgICAgICBwYXRoOiBcIi9cIiAvLyBRdWFpcyBjYW1pbmhvcyB0ZXJhbyBhY2Vzc28gYW8gY29va2llXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBub21lLFxyXG4gICAgICAgICAgdGVsZWZvbmUsXHJcbiAgICAgICAgICByb2xlLFxyXG4gICAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIC8vUGFzc2FyIHBhcmEgcHJveGltYXMgcmVxdWlzacOnb2VzIG8gbm9zc28gdG9rZW5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIFxyXG4gICAgICBpZih1c2VyLnJvbGU9PT0nYWRtaW4nKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9wZWRpZG9zJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm8gYW8gTG9nYXJcIilcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBub21lLCB0ZWxlZm9uZSwgcGFzc3dvcmR9OiBTaWduVXBQcm9wcyl7XHJcbiAgICB0cnl7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvYXV0aC9yZWdpc3RlcicsIHtcclxuICAgICAgICBub21lLFxyXG4gICAgICAgIHRlbGVmb25lLFxyXG4gICAgICAgIHBhc3N3b3JkLCAgXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiQ2FkYXN0cmFkbyBjb20gc3VjZXNzbyFcIilcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvIGFvIHNlIENhZGFzdHJhclwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluLCBzaWduT3V0LCBzaWduVXAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRlc3Ryb3lDb29raWUiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJ0b2FzdCIsIlJvdXRlciIsImFwaSIsIkF1dGhDb250ZXh0Iiwic2lnbk91dCIsInVuZGVmaW5lZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsImluYWN0aXZpdHlUaW1lb3V0IiwiaW5hY3Rpdml0eVRpbWVyIiwicmVzZXRJbmFjdGl2aXR5VGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlVXNlckludGVyYWN0aW9uIiwiY2hlY2tUb2tlbiIsInRva2VuIiwicmVzcG9uc2UiLCJnZXQiLCJpZCIsIm5vbWUiLCJ0ZWxlZm9uZSIsInJvbGUiLCJkYXRhIiwiZXJyb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpZ25JbiIsInBhc3N3b3JkIiwicG9zdCIsInN1Y2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiZXJyIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Documents\\\\workspace-spring\\\\ServeServ\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                autoClose: 3000\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Documents\\\\workspace-spring\\\\ServeServ\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Documents\\\\workspace-spring\\\\ServeServ\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBR3dCO0FBQ1A7QUFDRDtBQUVoQyxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSiwrREFBWUE7OzBCQUNYLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCwwREFBY0E7Z0JBQUNJLFdBQVc7Ozs7Ozs7Ozs7OztBQUdqQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGFzaC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXszMDAwfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupAPIClient: () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"http://localhost:8080\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@sujeitopizza.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            // qualquer erro 401 (não autorizado) devemos deslogar o usuário\n            if (true) {\n                // Estamos no lado do servidor, então você não deve chamar singOut() aqui\n                return Promise.reject(new _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__.AuthTokenError());\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDa0I7QUFFTjtBQUUzQyxTQUFTSSxlQUFlQyxNQUFNQyxTQUFTO0lBQzVDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSTtJQUUzQixNQUFNRyxNQUFNUixvREFBWSxDQUFDO1FBQ3ZCVSxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDM0Q7SUFDRjtJQUVBQyxJQUFJSyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRCxDQUFBQTtRQUM1QixPQUFPQTtJQUNULEdBQUcsQ0FBQ0U7UUFDRixJQUFJQSxNQUFNRixRQUFRLENBQUNHLE1BQU0sS0FBSyxLQUFLO1lBQ2pDLGdFQUFnRTtZQUNoRSxJQUFJLElBQWtCLEVBQWE7Z0JBQ2pDLHlFQUF5RTtnQkFDekUsT0FBT0MsUUFBUUMsTUFBTSxDQUFDLElBQUlqQixrRUFBY0E7WUFDMUMsT0FBTyxFQUdOO1FBQ0g7UUFDRixPQUFPZ0IsUUFBUUMsTUFBTSxDQUFDSDtJQUN0QjtJQUVBLE9BQU9SO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhc2gvLi9zZXJ2aWNlcy9hcGkudHM/NGJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyBBdXRoVG9rZW5FcnJvciB9IGZyb20gJy4vZXJyb3JzL0F1dGhUb2tlbkVycm9yJ1xyXG5cclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFQSUNsaWVudChjdHggPSB1bmRlZmluZWQpIHtcclxuICBsZXQgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWydAc3VqZWl0b3BpenphLnRva2VuJ119YFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAvLyBxdWFscXVlciBlcnJvIDQwMSAobsOjbyBhdXRvcml6YWRvKSBkZXZlbW9zIGRlc2xvZ2FyIG8gdXN1w6FyaW9cclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gRXN0YW1vcyBubyBsYWRvIGRvIHNlcnZpZG9yLCBlbnTDo28gdm9jw6ogbsOjbyBkZXZlIGNoYW1hciBzaW5nT3V0KCkgYXF1aVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3IoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRXN0YW1vcyBubyBsYWRvIGRvIGNsaWVudGUsIGVudMOjbyDDqSBzZWd1cm8gY2hhbWFyIHNpbmdPdXQoKVxyXG4gICAgICAgIHNpZ25PdXQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9KVxyXG5cclxuICByZXR1cm4gYXBpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsIkF1dGhUb2tlbkVycm9yIiwic2lnbk91dCIsInNldHVwQVBJQ2xpZW50IiwiY3R4IiwidW5kZWZpbmVkIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./services/apiClients.ts":
/*!********************************!*\
  !*** ./services/apiClients.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGlDbGllbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBR2hDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvYXBpQ2xpZW50cy50cz8wOTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHVwQVBJQ2xpZW50IH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IHNldHVwQVBJQ2xpZW50KCk7Il0sIm5hbWVzIjpbInNldHVwQVBJQ2xpZW50IiwiYXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/apiClients.ts\n");

/***/ }),

/***/ "./services/errors/AuthTokenError.ts":
/*!*******************************************!*\
  !*** ./services/errors/AuthTokenError.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthTokenError: () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"error with authrntication token\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9lcnJvcnMvQXV0aFRva2VuRXJyb3IudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLHVCQUF1QkM7SUFDbENDLGFBQWE7UUFDWCxLQUFLLENBQUM7SUFDUjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzP2YxYWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3J7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCdlcnJvciB3aXRoIGF1dGhybnRpY2F0aW9uIHRva2VuJylcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiQXV0aFRva2VuRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/errors/AuthTokenError.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();