const fs = require('fs-extra');
const path = require('path');

// Vue 빌드 결과
const source = path.resolve(__dirname, '../dist');

// Spring Boot 정적 리소스 위치
const target = path.resolve(__dirname, '../../gyool-works-ap/src/main/resources/static');

fs.copy(source, target, { overwrite: true })
    .then(() => console.log('✅ Vue 빌드 결과가 Spring Boot static/으로 복사됨'))
    .catch(err => console.error('❌ 복사 실패:', err));