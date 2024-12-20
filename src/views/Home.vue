<template>
  <div class="home">
    <!-- Header with gradient background -->
    <div class="header-gradient border-bottom">
      <el-header class="header-container">
        <div class="logo">产品快拆</div>
        <el-menu mode="horizontal" :router="true" class="nav-menu">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/products">已拆产品</el-menu-item>
          <el-menu-item index="/upcoming">待拆新品</el-menu-item>
          <el-menu-item index="/membership">开通会员</el-menu-item>
        </el-menu>
        <div class="header-actions">
          <el-button type="primary" @click="handleLogin">登陆/注册</el-button>
          <el-select v-model="language" class="language-select">
            <el-option label="EN/中文" value="en-zh" />
          </el-select>
        </div>
      </el-header>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-image-container">
        <img
          src="https://placeholder.co/800x400/orange/white?text=Product+Analysis"
          alt="Product Analysis"
          class="hero-image"
        />
      </div>
      <h1>竞品拆解，一键搞定！</h1>
      <p>无论网站还是APP，上传使用录屏视频，直接生成产品需求文档PRD、商业计划书</p>
      <el-button type="primary" size="large" @click="handleUpload">
        上传录屏，一键拆解
      </el-button>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Products List -->
      <div class="products-section">
        <div class="section-header">
          <h2>今日热门已拆产品</h2>
          <el-input
            v-model="searchQuery"
            placeholder="search"
            prefix-icon="el-icon-search"
            class="search-input"
          />
        </div>

        <div class="product-list">
          <el-card
            v-for="product in products"
            :key="product.id"
            class="product-card"
            @click="viewProduct(product.id)"
          >
            <div class="product-icon">{{ product.icon }}</div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-tags">
                <span v-for="tag in product.tags" :key="tag" class="tag">
                  • {{ tag }}
                </span>
              </div>
            </div>
            <div class="product-links">
              <el-link :href="'#bp-' + product.bp">BP (查看{{ product.bp }})</el-link>
              <el-link :href="'#prd-' + product.prd">PRD (查看{{ product.prd }})</el-link>
            </div>
          </el-card>
          <el-button type="primary" class="load-more">查看更多</el-button>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="testimonials-section">
        <el-card v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-title">{{ testimonial.title }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/services/api';

export default {
  name: 'Home',
  data() {
    return {
      language: 'en-zh',
      searchQuery: '',
      products: [],
      testimonials: [],
      loading: false
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const useMock = this.$route.query.mock === '1';
        const [productsRes, testimonialsRes] = await Promise.all([
          api.getProducts(useMock),
          api.getTestimonials(useMock)
        ]);
        this.products = productsRes.data.products;
        this.testimonials = testimonialsRes.data.testimonials;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.$message.error('Failed to load data');
      } finally {
        this.loading = false;
      }
    },
    handleLogin() {
      this.$router.push('/login');
    },
    handleUpload() {
      const query = this.$route.query.mock ? { mock: this.$route.query.mock } : {};
      this.$router.push({ path: '/upload', query });
    },
    viewProduct(productId) {
      const query = this.$route.query.mock ? { mock: this.$route.query.mock } : {};
      this.$router.push({
        path: `/products/${productId}`,
        query
      });
    }
  }
}
</script>

<style scoped>
.home {
  font-family: sans-serif;
}

.header-gradient {
  background: linear-gradient(to right, #f9fafb, #f3f4f6);
  border-bottom: 1px solid #e5e7eb;
}

.header-container {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
}

.nav-menu {
  border-bottom: none;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.hero-section {
  text-align: center;
  padding: 3rem 0;
  border-bottom: 1px solid #e5e7eb;
  max-width: 1024px;
  margin: 0 auto;
}

.hero-image-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.hero-section h1 {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-section p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.main-content {
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  gap: 2rem;
}

.products-section {
  flex-grow: 1;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.search-input {
  width: 200px;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-card {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
}

.product-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
  margin-right: 1rem;
}

.product-info {
  flex-grow: 1;
}

.product-name {
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.product-description {
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.product-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;
}

.product-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.testimonials-section {
  width: 20rem;
}

.testimonial-card {
  margin-bottom: 1rem;
}

.testimonial-text {
  color: #6b7280;
  margin-bottom: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 2.5rem;
  height: 2.5rem;
  background: #e5e7eb;
  border-radius: 9999px;
  margin-right: 0.75rem;
}

.author-name {
  font-weight: 500;
  cursor: pointer;
}

.author-title {
  font-size: 0.875rem;
  color: #6b7280;
}

.load-more {
  width: 100%;
  margin-top: 1rem;
}
</style>
