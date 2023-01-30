<template>
  <header>
    <div class="header-grid">
      <div class="left-side">
        <div class="left-item">Logo</div>

        <div class="left-item"><CheckOutlined /> Fri frakt</div>
        <div class="left-item"><CheckOutlined /> 30 dagars öppet köp</div>
      </div>
      <div class="right-side">
        <div class="right-item"><UserOutlined /> Min sida</div>
        <div class="right-item"><ShoppingCartOutlined /> Kundvagn</div>
      </div>
    </div>
  </header>
</template>

<script>
import { UserOutlined, CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons-vue";

export default {
  name: "OldHeaderView",
  components: {
    UserOutlined,
    CheckOutlined,
    ShoppingCartOutlined,
  },
};
</script>

<style>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
.header-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #f2f2f2;
}
.left-side {
  display: flex;
}
.left-item {
  padding: 10px;
}
.right-side {
  display: flex;
}
.right-item {
  padding: 10px;
}
</style>
