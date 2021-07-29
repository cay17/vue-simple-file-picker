<template>
    <div
      @click="selectImage()"
      :style="{'cursor': 'pointer', 'width': widthFull?'100%':width+'px',  'height': heightFull?'100%':height+'px', 'background-color': bgColor, 'border-radius': '5px'}"
    >
    {{transfert}}
      <div
        style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; background-size: contain; background-repeat: no-repeat; background-position: center"
        :style="{ 'background-image': 'url(' + url1 + ')', 'background-color': url1?'white':''}"
      >
        <div
        >
          <span style="color: #fff; font-size: 70px; font-weight: bold; padding: 1px 20px; background-color: #0000005f; border-radius: 50px">+</span>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'VueSimpleFilePicker',
  components: {

  },
  props: {
    url: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: 150
    },
    width: {
      type: Number,
      required: false,
      default: 150
    },
    bgColor: {
      type: String,
      required: false,
      default: '#0000001f'
    },
    widthFull: {
      type: Boolean,
      required: false,
      default: false
    },
    heightFull: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data () {
    return {
      temoinUrl: null,
      temoinCouleur: '#000',
      file: null,
      base64: "",
      url1: null
    }
  },

  computed: {  
    transfert () {
            if (this.url1 !== this.temoinUrl) {
                let obj = {}
                obj.url = this.url1
                obj.file = this.base64
                this.$emit('data', obj)
                this.setTemoinUrl(this.url1)
                console.log(obj)
            }
            return ''
        }
  },
  created () {
    this.temoinUrl = this.url
    this.url1 = this.url
  },
  methods: {
    setTemoinUrl (url) {
      this.temoinUrl = url
    },
    dataURLtoFile (info) {
      fetch(info)
        .then(res => {
          res.blob()
            .then(resp => {
              const file = new File([resp], 'File name', { type: 'image/*' })
              this.url1 = URL.createObjectURL(file)
            })
        })
    },
    selectImage () {
      let input = document.createElement('input')
      input.type = 'file'
      input.setAttribute('accept', 'image/*')
      input.onchange = e => {
        this.file = e.target.files[0]
        this.convertirbase64(this.file)
      }
      input.click()
    },
    convertirbase64 (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.base64 = e.target.result
        this.url1 = URL.createObjectURL(this.file)
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style scoped>
</style>
