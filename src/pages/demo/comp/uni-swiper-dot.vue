<route lang="json5">
{
  layout: 'comp',
  style: {
    navigationBarTitleText: 'SwiperDot 轮播图指示点',
  },
}
</route>

<script setup lang="ts">
type Mode = 'default' | 'dot' | 'round' | 'nav' | 'indexes'
const mode = ref<Mode>('default')

const state = reactive({
  modeIndex: -1,
  styleIndex: -1,
  current: 0,
  dotsStyles: {},
  swiperDotIndex: 0,
})

const info = ref([
  {
    colorClass: 'uni-bg-red',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 A',
  },
  {
    colorClass: 'uni-bg-green',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 B',
  },
  {
    colorClass: 'uni-bg-blue',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 C',
  },
])

const dotStyle = ref([
  {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    border: '1px rgba(0, 0, 0, .3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
    selectedBorder: '1px rgba(0, 0, 0, .9) solid',
  },
  {
    backgroundColor: 'rgba(255, 90, 95,0.3)',
    border: '1px rgba(255, 90, 95,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
    selectedBorder: '1px rgba(255, 90, 95,0.9) solid',
  },
  {
    backgroundColor: 'rgba(83, 200, 249,0.3)',
    border: '1px rgba(83, 200, 249,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
    selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
  },
])

function change(e: any) {
  state.current = e.detail.current
}

function selectMode(type: Mode, index: number) {
  mode.value = type
  state.modeIndex = index
  state.styleIndex = -1
  state.dotsStyles = dotStyle.value[0]
}

function selectStyle(index: number) {
  state.dotsStyles = dotStyle.value[index]
  state.styleIndex = index
}
</script>

<template>
  <uni-swiper-dot
    class="uni-swiper-dot-box"
    :info="info"
    :mode="mode"
    :current="state.current"
    :dots-styles="state.dotsStyles"
    field="content"
  >
    <swiper class="swiper-box" @change="change">
      <swiper-item v-for="(item, index) in info" :key="index">
        <view class="swiper-item" :class="item.colorClass">
          <text class="text-4xl">
            {{ index }}
          </text>
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>

  <uni-section title="模式选择" type="line">
    <view class="example-body">
      <view
        :class="{ active: state.modeIndex === 0 }"
        class="example-body-item"
        @click="selectMode('default', 0)"
      >
        <text class="example-body-item-text">
          default
        </text>
      </view>
      <view
        :class="{ active: state.modeIndex === 1 }"
        class="example-body-item"
        @click="selectMode('dot', 1)"
      >
        <text class="example-body-item-text">
          dot
        </text>
      </view>
      <view
        :class="{ active: state.modeIndex === 2 }"
        class="example-body-item"
        @click="selectMode('round', 2)"
      >
        <text class="example-body-item-text">
          round
        </text>
      </view>
      <view
        :class="{ active: state.modeIndex === 3 }"
        class="example-body-item"
        @click="selectMode('nav', 3)"
      >
        <text class="example-body-item-text">
          nav
        </text>
      </view>
      <view
        :class="{ active: state.modeIndex === 4 }"
        class="example-body-item"
        @click="selectMode('indexes', 4)"
      >
        <text class="example-body-item-text">
          indexes
        </text>
      </view>
    </view>
  </uni-section>

  <uni-section title="颜色样式选择" type="line">
    <view class="example-body">
      <template v-if="mode !== 'nav'">
        <view
          v-for="(item, index) in dotStyle"
          :key="index"
          :class="{ active: state.styleIndex === index }"
          class="example-body-item"
          @click="selectStyle(index)"
        >
          <view
            :style="{
              'background-color': item.selectedBackgroundColor,
              'border': item.selectedBorder,
            }"
            class="example-body-dots"
          />
          <view
            :style="{ 'background-color': item.backgroundColor, 'border': item.border }"
            class="example-body-dots"
          />
          <view
            :style="{ 'background-color': item.backgroundColor, 'border': item.border }"
            class="example-body-dots"
          />
        </view>
      </template>
      <template v-if="mode === 'nav'">
        <view
          v-for="(item, index) in dotStyle"
          :key="index"
          :class="{ active: state.styleIndex === index }"
          :style="{ 'background-color': item.selectedBackgroundColor }"
          class="example-body-item"
          @click="selectStyle(index)"
        >
          <text class="example-body-item-text" :style="{ color: item.color }">
            内容
          </text>
        </view>
      </template>
    </view>
  </uni-section>
</template>

<style scoped lang="scss">
.swiper-box {
  height: 200px;
}

.swiper-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #fff;
}

.image {
  width: 750rpx;
}

/* #ifndef APP-NVUE */
::v-deep .image img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

/* #endif */

@media screen and (min-width: 500px) {
  .uni-swiper-dot-box {
    width: 400px;
    margin: 0 auto;
    margin-top: 8px;
  }

  .image {
    width: 100%;
  }
}

.uni-bg-red {
  background-color: #ff5a5f;
}

.uni-bg-green {
  background-color: #09bb07;
}

.uni-bg-blue {
  background-color: #007aff;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding: 20rpx;
}

.example-body-item {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15rpx;
  padding: 15rpx;
  height: 60rpx;
  /* #ifndef APP-NVUE */
  display: flex;
  padding: 0 15rpx;
  /* #endif */
  flex: 1;
  border-color: #e5e5e5;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
}

.example-body-item-text {
  font-size: 28rpx;
  color: #333;
}

.example-body-dots {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50px;
  background-color: #333333;
  margin-left: 10rpx;
}

.active {
  border-style: solid;
  border-color: #007aff;
  border-width: 1px;
}
</style>
