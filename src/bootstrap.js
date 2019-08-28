
export default function (RealVue, RealApp) {
  new RealVue({
    render: h => h(RealApp)
  }).$mount('#app')

  return import('./crap')
    .then(crap => {
      console.log('spewing crap')
      crap.spew()
      console.log('done spewing crap')
    })
    .catch(err => console.error('Could Not Load crap', err))
}
