<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-item">
          <h2 class="footer-item__title title">КОМПАНИЯ</h2>
          <ul class="footer-list">
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </div>
        <div class="footer-item">
          <h2 class="footer-item__title title">ПОЛЕЗНОЕ</h2>
          <ul class="footer-list">
            <li>
              <a href="">Оплата и доставка</a>
            </li>
            <li>
              <a href="">Условия возврата</a>
            </li>
            <li>
              <a href="">Бонусная система</a>
            </li>
          </ul>
        </div>
        <div class="footer-item">
          <h2 class="footer-item__title title">ПОКУПАТЕЛЮ</h2>
          <ul class="footer-list">
            <li>
              <a href="">Избранное</a>
            </li>
            <li>
              <a href="">Публичная оферта</a>
            </li>
            <li>
              <a href="">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
        <div class="footer-item">
          <h2 class="footer-item__title title">Контакты</h2>
          <ul class="footer-list">
            <li>
              <ul class="footer-icons">
                <li>
                  <a href="catalog.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <g clip-path="url(#clip0_1_214)">
                        <path d="M9.49968 7.125C8.86979 7.125 8.2657 7.37522 7.8203 7.82062C7.3749 8.26602 7.12467 8.87011 7.12467 9.5C7.12467 10.1299 7.3749 10.734 7.8203 11.1794C8.2657 11.6248 8.86979 11.875 9.49968 11.875C10.1296 11.875 10.7337 11.6248 11.1791 11.1794C11.6245 10.734 11.8747 10.1299 11.8747 9.5C11.8747 8.87011 11.6245 8.26602 11.1791 7.82062C10.7337 7.37522 10.1296 7.125 9.49968 7.125ZM9.49968 5.54167C10.5495 5.54167 11.5563 5.9587 12.2986 6.70104C13.041 7.44337 13.458 8.45018 13.458 9.5C13.458 10.5498 13.041 11.5566 12.2986 12.299C11.5563 13.0413 10.5495 13.4583 9.49968 13.4583C8.44986 13.4583 7.44304 13.0413 6.70071 12.299C5.95838 11.5566 5.54134 10.5498 5.54134 9.5C5.54134 8.45018 5.95838 7.44337 6.70071 6.70104C7.44304 5.9587 8.44986 5.54167 9.49968 5.54167ZM14.6455 5.34375C14.6455 5.6062 14.5413 5.85791 14.3557 6.04349C14.1701 6.22907 13.9184 6.33333 13.6559 6.33333C13.3935 6.33333 13.1418 6.22907 12.9562 6.04349C12.7706 5.85791 12.6663 5.6062 12.6663 5.34375C12.6663 5.0813 12.7706 4.82959 12.9562 4.64401C13.1418 4.45843 13.3935 4.35417 13.6559 4.35417C13.9184 4.35417 14.1701 4.45843 14.3557 4.64401C14.5413 4.82959 14.6455 5.0813 14.6455 5.34375ZM9.49968 3.16667C7.54109 3.16667 7.22126 3.17221 6.31005 3.21258C5.68938 3.24187 5.27297 3.325 4.88663 3.47542C4.54305 3.60842 4.29526 3.76754 4.03163 4.03196C3.78385 4.27136 3.59333 4.56363 3.4743 4.88696C3.32388 5.27487 3.24076 5.6905 3.21226 6.31037C3.17109 7.18437 3.16634 7.48996 3.16634 9.5C3.16634 11.4586 3.17188 11.7784 3.21226 12.6896C3.24155 13.3095 3.32467 13.7267 3.4743 14.1123C3.60888 14.4566 3.76722 14.7044 4.03005 14.9672C4.29684 15.2333 4.54463 15.3924 4.88505 15.5238C5.27613 15.675 5.69255 15.7589 6.31005 15.7874C7.18405 15.8286 7.48963 15.8333 9.49968 15.8333C11.4583 15.8333 11.7781 15.8278 12.6893 15.7874C13.3084 15.7581 13.7256 15.675 14.1119 15.5254C14.4547 15.3916 14.7041 15.2325 14.9669 14.9696C15.2337 14.7028 15.3928 14.455 15.5243 14.1146C15.6747 13.7243 15.7586 13.3071 15.7871 12.6896C15.8283 11.8156 15.833 11.51 15.833 9.5C15.833 7.54142 15.8275 7.22158 15.7871 6.31037C15.7578 5.69129 15.6747 5.27329 15.5243 4.88696C15.4049 4.56396 15.2148 4.2718 14.9677 4.03196C14.7284 3.78404 14.4361 3.59351 14.1127 3.47462C13.7248 3.32421 13.3084 3.24108 12.6893 3.21258C11.8153 3.17142 11.5097 3.16667 9.49968 3.16667ZM9.49968 1.58333C11.6506 1.58333 11.919 1.59125 12.7629 1.63083C13.6061 1.67042 14.18 1.80262 14.6851 1.99896C15.2076 2.20004 15.6478 2.47237 16.0879 2.91175C16.4905 3.3075 16.802 3.78622 17.0007 4.31458C17.1963 4.81887 17.3293 5.39362 17.3688 6.23675C17.4061 7.08067 17.4163 7.34904 17.4163 9.5C17.4163 11.651 17.4084 11.9193 17.3688 12.7632C17.3293 13.6064 17.1963 14.1803 17.0007 14.6854C16.8025 15.2141 16.491 15.6929 16.0879 16.0883C15.6921 16.4907 15.2134 16.8021 14.6851 17.001C14.1808 17.1966 13.6061 17.3296 12.7629 17.3692C11.919 17.4064 11.6506 17.4167 9.49968 17.4167C7.34872 17.4167 7.08034 17.4088 6.23642 17.3692C5.3933 17.3296 4.81934 17.1966 4.31426 17.001C3.78568 16.8027 3.30688 16.4912 2.91142 16.0883C2.50879 15.6926 2.19729 15.2138 1.99863 14.6854C1.8023 14.1811 1.67009 13.6064 1.63051 12.7632C1.5933 11.9193 1.58301 11.651 1.58301 9.5C1.58301 7.34904 1.59092 7.08067 1.63051 6.23675C1.67009 5.39283 1.8023 4.81967 1.99863 4.31458C2.19674 3.78589 2.50831 3.30704 2.91142 2.91175C3.307 2.50897 3.78576 2.19745 4.31426 1.99896C4.81934 1.80262 5.39251 1.67042 6.23642 1.63083C7.08034 1.59362 7.34872 1.58333 9.49968 1.58333Z" fill="#E0BEA2"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_214">
                          <rect width="19" height="19" fill="white"/>
                        </clipPath	ipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <g clip-path="url(#clip0_1_217)">
                        <path d="M9.49968 15.8333C11.1794 15.8333 12.7903 15.1661 13.978 13.9783C15.1657 12.7906 15.833 11.1797 15.833 9.5C15.833 7.82029 15.1657 6.20939 13.978 5.02166C12.7903 3.83393 11.1794 3.16667 9.49968 3.16667C7.81997 3.16667 6.20906 3.83393 5.02133 5.02166C3.8336 6.20939 3.16634 7.82029 3.16634 9.5C3.16634 11.1797 3.8336 12.7906 5.02133 13.9783C6.20906 15.1661 7.81997 15.8333 9.49968 15.8333ZM9.49968 17.4167C5.1273 17.4167 1.58301 13.8724 1.58301 9.5C1.58301 5.12762 5.1273 1.58333 9.49968 1.58333C13.8721 1.58333 17.4163 5.12762 17.4163 9.5C17.4163 13.8724 13.8721 17.4167 9.49968 17.4167ZM7.03759 10.4262L5.06001 9.80954C4.63251 9.67892 4.63013 9.38442 5.1558 9.17304L12.8611 6.19637C13.3084 6.01429 13.5617 6.24467 13.4168 6.82179L12.1051 13.0126C12.0132 13.4536 11.748 13.5589 11.3799 13.3554L9.36034 11.8608L8.41905 12.7696C8.32247 12.863 8.24409 12.943 8.09526 12.9628C7.94722 12.9833 7.8253 12.939 7.73584 12.6936L7.04709 10.4207L7.03759 10.4262Z" fill="#E0BEA2"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_217">
                          <rect width="19" height="19" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">+38(073) 096 36 44</a>
            </li>
            <li>
              <a href="">info@yanki.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-bottom: 50px;
  margin-top: 100px;
  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 45px;
  }

  &-item {
    &__title {
      margin-bottom: 20px;
      text-transform: uppercase;
    }
  }
  &-list {
    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
      a {
        color: #252525;
        font-family: 'Raleway', serif;
        font-size: 16px;
        font-weight: 200;
        transition: .3s all;
        &:hover {
          color: #E0BEA2;
          opacity: 0.7;
        }
      }
    }
  }

  &-icons {
    display: flex;
    li {
      margin-right: 10px;
      margin-bottom: 0;
      &:last-child {
        margin-right: 0;
      }

      a {
        width: 19px;
        height: 19px;
        display: block;
      }
    }
  }
}
</style>