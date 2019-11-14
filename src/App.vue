<template>
  <Row type="flex">
    <i-col :span="4">
      <Menu theme="light" id="menu" active-name="1">
        <MenuGroup title="Orgol">
          <router-link to="/">
            <MenuItem name="1">HOME</MenuItem>
          </router-link>
          <router-link to="/music">
            <MenuItem name="2">Play Youtube</MenuItem>
          </router-link>
        </MenuGroup>
      </Menu>
    </i-col>
    <i-col id="content" :span="20">
      <router-view></router-view>
    </i-col>
  </Row>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#menu {
  width: auto !important;
  height: 100%;
}
#content {
  padding: 2em;
}
</style>
