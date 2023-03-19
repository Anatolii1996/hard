module.exports = {
    // Название плагинов, которые будут использоваться
    // для проверки содержимого HTML-элементов
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom',
    // Пути к файлам с тестами
    testMatch: [
      './App.test.js',
      
    ],
  
    // Путь к папке с компонентами, если вы используете React
    roots: ['<rootDir>/src'],
  
    // Настройки для расширения Jest-extended
    setupFiles: ['jest-extended'],
  
    // Настройка Jest-circus для управления тестами
    testRunner: 'jest-circus/runner',
  
    // Настройка для очистки окружения после каждого теста
    clearMocks: true,
  
    // Настройка Jest на использование расширения ".test.js"
    // для файлов с тестами
    moduleFileExtensions: ['js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
  };