<template>
  <div class="barrage"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
export default {
  setup() {
    let data = ref([]),
      count = ref(0),
      ws = new WebSocket(process.env.VUE_APP_WEBSOCKET_URL);

    onMounted(async () => {
      ws.onopen = () => {
        console.log('open connection');
      };

      ws.onmessage = (event) => {
        const bullet = JSON.parse(event.data);
        if (bullet.text !== '') createText(bullet.text, bullet.avatar);
      };
    });
    onUnmounted(() => {
      ws.onclose = () => {
        console.log('close connection');
      };
    });
    async function createText(text, avatar) {
      let div_text = document.createElement('div');
      div_text.id = 'text' + 1;
      div_text.style.position = 'fixed';
      div_text.style.whiteSpace = 'nowrap';

      div_text.style.left = document.documentElement.clientWidth + 'px';
      const random = Math.round(
        Math.random() * document.documentElement.clientHeight
      );

      div_text.style.top = random + 'px';

      //<img src="..." alt="..." class="img-thumbnail">
      let picture = document.createElement('img');
      picture.src = avatar;
      picture.className = 'img-thumbnail';
      picture.style.width = '50px';
      picture.style.height = '50px';
      if (text && avatar) {
        div_text.appendChild(picture);
        div_text.appendChild(document.createTextNode(text));
        document.body.appendChild(div_text);
      }
      await gsap.to('#' + div_text.id, {
        duration: 8,
        x: -1 * (document.documentElement.clientWidth + div_text.clientWidth),
      });
      if (div_text.hasChildNodes()) div_text.parentNode.removeChild(div_text);
    }
    return { count, data };
  },
};
</script>
