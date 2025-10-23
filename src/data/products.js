export let products = [
    {
        id: 1,
        name: 'Black kr19',
        category: 'Pistolas',
        description: 'Pistola semiautomática de alta capacidad con diseño ergonómico',
        image: '/products/kra9_black_Web.png',
        price: 1000,
        stock: 10,
        
        specs: {
      caliber: '9x19 mm',
      overallLength: '157 mm',
      height: '117.70 mm',
      barrelLength: '81.5 mm',
      weight: '541 gr',
      rateOfFire: '700-900 rpm',
      capacity: '7+1',
      system: 'Single-Action Trigger Hammer-Fired',
      weightEmptyMag: '480 gr',
      rateOfTwist: '1:10 w/6 grooves'
    },
    features: [
      'Gatillo de acción simple',
      'Seguridad manual',
      'Miras fijas',
      'Empuñadura texturizada',
      'Acabado negro resistente'
    ]
},
{
    id:2,
    name: 'Black kr19 PRO',
    category: 'Pistolas',
    description: 'Pistola semiautomática de alta capacidad c',
    image: '/products/kra9_Black_pro_Web.png',
    price: 1200,
    stock: 10,
    
    specs: {
      caliber: '9x19 mm',
      overallLength: '157 mm',
      height: '',
      barrelLength: '81.5 mm',
      weight: '541 gr',
      rateOfFire: '700-900 rpm',
      capacity: '7+1',
      system: 'Single-Action Trigger Hammer-Fired',
      weightEmptyMag: '480 gr',
      rateOfTwist: '1:10 w/6 grooves'
    },
    



}

]


// Función para agregar productos dinámicamente
export const addProduct = (newProduct) => {
  const product = {
    id: products.length + 1,
    ...newProduct
  }
  products.push(product)
  return product
}


//Funcion para actualizar productos
export const updateProduct = (id,updateFields)=>{
    const index = products.findIndex(product => product.id === id)
    if (index !== -1) {
     products[index] = {
       ...products[index],
       ...updateFields
     }
     return products[index]
    }
    return null
}

// Función para eliminar productos
export const deleteProduct = (id) => {
  const index = products.findIndex(p => p.id === id)
  if (index !== -1) {
    return products.splice(index, 1)[0]
  }
  return null
}

    
    export const features = [
    {
        icon: 'heroicons:check-badge-20-solid',
        title: 'Calidad Certificada',
        description: 'Productos certificados con estándares internacionales de calidad y seguridad'
    },
    {
        icon: 'heroicons:shield-check-20-solid',
        title: 'Garantía Extendida',
        description: 'Respaldo total con garantía del fabricante y servicio técnico especializado'
    },
    {
        icon: 'heroicons:rocket-launch-20-solid',
        title: 'Entrega Rápida',
        description: 'Envíos seguros a todo Ecuador con seguimiento en tiempo real'
    }
]
    
 

