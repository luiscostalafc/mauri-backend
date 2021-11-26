import { schema } from '@ioc:Adonis/Core/Validator'

export const MercadoPagoMerchantOrderCreateSchema = schema.create({
  'preference_id': schema.string.optional(),
  /** Id do aplicativo. */
  'application_id': schema.string.optional(),
  /** Identificador do país a que pertence a ordem. */
  'site_id': schema.string.optional(),
  /** Informação do comprador. */
  'payer.id': schema.number.optional(),
  'payer.email': schema.string.optional(),
  'payer.nickname': schema.string.optional(),
  /** Sponsor ID in Mercado Pago. */
  'sponsor_id': schema.number.optional(),
  /** URL em que você gostaria de receber uma notificação de status de pagamento. */
  'notification_url': schema.string.optional(),
  /** Informações adicionais do pagamento. */
  'additional_info': schema.string.optional(),
  /** Referência que pode sincronizar com seu sistema de pagamentos. */
  'external_reference': schema.string.optional(),
  /** Origem do pagamento. Valor padrão: 'NONE' */
  'marketplace': schema.string.optional(),

  /** Informação do item. */
  // items?: UpdateMerchantOrderItem[] | undefined;
  // /** Id do anúncio. */
  // id?: number | undefined;
  // /** Identificador da moeda utilizada no preço do item. */
  // currency_id?: 'ARS' | 'BRL' | 'CLP' | 'MXN' | 'COP' | 'PEN' | 'UYU' | undefined;
  // /** Nome do item. */
  // title?: string | undefined;
  // /** Descrição do artigo. */
  // description?: string | undefined;
  // /** URL da imagem. */
  // picture_url?: string | undefined;
  // /** Categoria do item. */
  // category_id?: string | undefined;
  // /** Quantidade de itens. */
  // quantity?: number | undefined;
  // /** Preço unitário. */
  // unit_price?: number | undefined;
})

export const MercadoPagoMerchantOrderUpdateSchema = schema.create({
  'id': schema.string(),
  'preference_id': schema.string.optional(),
  /** Id do aplicativo. */
  'application_id': schema.string.optional(),
  /** Identificador do país a que pertence a ordem. */
  'site_id': schema.string.optional(),
  /** Informação do comprador. */
  'payer.id': schema.number.optional(),
  'payer.email': schema.string.optional(),
  'payer.nickname': schema.string.optional(),
  /** Sponsor ID in Mercado Pago. */
  'sponsor_id': schema.number.optional(),
  /** URL em que você gostaria de receber uma notificação de status de pagamento. */
  'notification_url': schema.string.optional(),
  /** Informações adicionais do pagamento. */
  'additional_info': schema.string.optional(),
  /** Referência que pode sincronizar com seu sistema de pagamentos. */
  'external_reference': schema.string.optional(),
  /** Origem do pagamento. Valor padrão: 'NONE' */
  'marketplace': schema.string.optional(),

  /** Informação do item. */
  // items?: UpdateMerchantOrderItem[] | undefined;
  // /** Id do anúncio. */
  // id?: number | undefined;
  // /** Identificador da moeda utilizada no preço do item. */
  // currency_id?: 'ARS' | 'BRL' | 'CLP' | 'MXN' | 'COP' | 'PEN' | 'UYU' | undefined;
  // /** Nome do item. */
  // title?: string | undefined;
  // /** Descrição do artigo. */
  // description?: string | undefined;
  // /** URL da imagem. */
  // picture_url?: string | undefined;
  // /** Categoria do item. */
  // category_id?: string | undefined;
  // /** Quantidade de itens. */
  // quantity?: number | undefined;
  // /** Preço unitário. */
  // unit_price?: number | undefined;
})

export const MercadoPagoMerchantOrderSearchSchema = schema.create({
  id: schema.string.optional(),
})
