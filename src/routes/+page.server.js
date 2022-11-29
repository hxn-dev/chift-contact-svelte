import { ODOO_HOST, ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD } from '$env/static/private'
import Odoo from 'odoo-await'

export async function load({ params }) {

  const odoo = new Odoo({
      baseUrl: ODOO_HOST,
      db: ODOO_DB,
      username: ODOO_USERNAME,
      password: ODOO_PASSWORD
  })

  await odoo.connect()
    const records =  await odoo.searchRead(`res.partner`);

    return {
      records
    }

}