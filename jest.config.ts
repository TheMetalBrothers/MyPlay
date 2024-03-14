export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
       "^.+\\.svg$": "<rootDir>/svgTransform.cjs" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.svg": "<rootDir>/src/test/_mocks_/fileMock.cjs"
    },
}

