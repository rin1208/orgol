<template>
  <div id="app">
    <Row type="flex">
      <i-col :span="5">
        <Menu theme="light" active-name="1">
          <MenuGroup title="huga">
            <router-link to="/">
              <MenuItem name="1">hoge</MenuItem>
            </router-link>
            <router-link to="/music">
              <MenuItem name="2">hoge</MenuItem>
            </router-link>
          </MenuGroup>
        </Menu>
      </i-col>
      <router-view />
    </Row>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
