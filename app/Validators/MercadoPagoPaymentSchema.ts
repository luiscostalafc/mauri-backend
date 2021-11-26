import { schema } from '@ioc:Adonis/Core/Validator'

export const MercadoPagoPaymentCreateSchema = schema.create({
  /** Identificação do pagador associado. */
  'payer.id': schema.string.optional(),
  /** Nome do pagador associado. */
  'payer.first_name': schema.string.optional(),
  'payer.last_name': schema.string.optional(),
  'payer.email': schema.string(),
  /** Telefone do pagador associado. */
  'payer.phone.area_code': schema.string(),
  'payer.phone.number': schema.string(),
  'payer.phone.extension': schema.string.optional(),
  /** Identificação pessoal. */
  'payer.identification.type': schema.string.optional(),
  'payer.identification.number': schema.string.optional(),
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  'payer.entity_type': schema.enum(['individual', 'association']),
  /** Tipo de identificação do pagador associado (se necessário o pagador é um cliente). */
  'payer.type': schema.enum(['customer', 'registered', 'guest']),
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  'binary_mode': schema.boolean.optional(),
  /** Identificador de ordem. */
  'order.type': schema.enum(['mercadolibre', 'mercadopago']),
  'order.id': schema.number(),
  /** Identificação fornecida pelo vendedor em seu sistema. */
  'external_reference': schema.string.optional(),
  /** Razão de pagamento ou título do item. */
  'description': schema.string.optional(),
  /** JSON válido que pode ser adicionado ao pagamento para salvar atributos adicionais do comprador. */
  // metadata?: any,
  /** Custo do produto. */
  'transaction_amount': schema.number(),
  /** Valor do cupom de desconto. */
  'coupon_amount': schema.number.optional(),
  /** Data (ISO 8601) de expiração do pagamento. */
  'date_of_expiration': schema.string.optional(),
  /** Identificador da campanha de desconto. */
  'campaign_id': schema.number.optional(),
  /** Campanha de desconto com um código específico. */
  'coupon_code': schema.string.optional(),
  /** Id do esquema de absorção do custo financeiro. */
  'differential_pricing_id': schema.number.optional(),
  /** Comissão coletadas pelo mercado ou pelo Mercado Pago. */
  'application_fee': schema.number.optional(),
  /** Determina se o pagamento deve ser capturado(true, default value), ou apenas reservado(false). */
  'capture': schema.boolean.optional(),
  /** Meio de pagamento escolhido para fazer o pagamento. */
  'payment_method_id': schema.string(),
  /** Id do emitente do meio de pagamento. */
  'issuer_id': schema.string.optional(),
  /** Identificador de token card. (Obrigatório para cartão de crédito) */
  'token': schema.string.optional(),
  /** Como aparecerá o pagamento no extrato do cartão (ex: o MERCADOPAGO). */
  'statement_descriptor': schema.string.optional(),
  /** Quantidade selecionada de cotas. (Obrigatório) */
  'installments': schema.number(),
  /** URL para qual Mercado Pago enviará notificações associadas a mudanças no status do pagamento. */
  'notification_url': schema.string.optional(),
  /** URL para a qual o Mercado Pago faz o redirecionamento final (apenas para transferência bancária). */
  'callback_url': schema.string.optional(),

  /** Informações que podem melhorar a análise de prevenção de fraude e a taxa de conversão. Trata de enviar-nos toda a informação possível. */
  /** IP do qual provém o request (apenas para transferência bancária). */
  'additional_info.ip_address': schema.string.optional(),
  /** Lista de itens a pagar. */
  // items?: PaymentItem[] | undefined,
  /** Telefone do pagador associado. */
  'additional_info.payer.phone.area_code': schema.string.optional(),
  'additional_info.payer.phone.number': schema.string.optional(),
  'additional_info.payer.phone.extension': schema.string.optional(),
  /** Endereço do pagador. */
  'additional_info.payer.address.zip_code': schema.string.optional(),
  'additional_info.payer.address.street_name': schema.string.optional(),
  'additional_info.payer.address.street_number': schema.string.optional(),
  /** Data de cadastro do comprador em seu site. */
  'additional_info.registration_date': schema.string.optional(),
  /** Informações de envio. */
  'additional_info.shipments.address.zip_code': schema.string.optional(),
  'additional_info.shipments.address.street_name': schema.string.optional(),
  'additional_info.shipments.address.street_number': schema.string.optional(),
  'additional_info.shipments.address.receiver_address': schema.string.optional(),
  'additional_info.shipments.address.floor': schema.string.optional(),
  'additional_info.shipments.address.apartment': schema.string.optional(),
  /** Endereço do comprador. */
  'additional_info.receiver_address': schema.string.optional(),
})

export const MercadoPagoPaymentUpdateSchema = schema.create({
  /** Payment id. */
  'id': schema.number(),
  /** Identificação do pagador associado. */
  'payer.id': schema.string.optional(),
  /** Nome do pagador associado. */
  'payer.first_name': schema.string.optional(),
  'payer.last_name': schema.string.optional(),
  'payer.email': schema.string(),
  /** Telefone do pagador associado. */
  'payer.phone.area_code': schema.string(),
  'payer.phone.number': schema.string(),
  'payer.phone.extension': schema.string.optional(),
  /** Identificação pessoal. */
  'payer.identification.type': schema.string.optional(),
  'payer.identification.number': schema.string.optional(),
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  'payer.entity_type': schema.enum(['individual', 'association']),
  /** Tipo de identificação do pagador associado (se necessário o pagador é um cliente). */
  'payer.type': schema.enum(['customer', 'registered', 'guest']),
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  'binary_mode': schema.boolean.optional(),
  /** Identificador de ordem. */
  'order.type': schema.enum(['mercadolibre', 'mercadopago']),
  'order.id': schema.number(),
  /** Identificação fornecida pelo vendedor em seu sistema. */
  'external_reference': schema.string.optional(),
  /** Razão de pagamento ou título do item. */
  'description': schema.string.optional(),
  /** JSON válido que pode ser adicionado ao pagamento para salvar atributos adicionais do comprador. */
  // metadata?: any,
  /** Custo do produto. */
  'transaction_amount': schema.number(),
  /** Valor do cupom de desconto. */
  'coupon_amount': schema.number.optional(),
  /** Data (ISO 8601) de expiração do pagamento. */
  'date_of_expiration': schema.string.optional(),
  /** Identificador da campanha de desconto. */
  'campaign_id': schema.number.optional(),
  /** Campanha de desconto com um código específico. */
  'coupon_code': schema.string.optional(),
  /** Id do esquema de absorção do custo financeiro. */
  'differential_pricing_id': schema.number.optional(),
  /** Comissão coletadas pelo mercado ou pelo Mercado Pago. */
  'application_fee': schema.number.optional(),
  /** Determina se o pagamento deve ser capturado(true, default value), ou apenas reservado(false). */
  'capture': schema.boolean.optional(),
  /** Meio de pagamento escolhido para fazer o pagamento. */
  'payment_method_id': schema.string(),
  /** Id do emitente do meio de pagamento. */
  'issuer_id': schema.string.optional(),
  /** Identificador de token card. (Obrigatório para cartão de crédito) */
  'token': schema.string.optional(),
  /** Como aparecerá o pagamento no extrato do cartão (ex: o MERCADOPAGO). */
  'statement_descriptor': schema.string.optional(),
  /** Quantidade selecionada de cotas. (Obrigatório) */
  'installments': schema.number(),
  /** URL para qual Mercado Pago enviará notificações associadas a mudanças no status do pagamento. */
  'notification_url': schema.string.optional(),
  /** URL para a qual o Mercado Pago faz o redirecionamento final (apenas para transferência bancária). */
  'callback_url': schema.string.optional(),

  /** Informações que podem melhorar a análise de prevenção de fraude e a taxa de conversão. Trata de enviar-nos toda a informação possível. */
  /** IP do qual provém o request (apenas para transferência bancária). */
  'additional_info.ip_address': schema.string.optional(),
  /** Lista de itens a pagar. */
  // items?: PaymentItem[] | undefined,
  /** Telefone do pagador associado. */
  'additional_info.payer.phone.area_code': schema.string.optional(),
  'additional_info.payer.phone.number': schema.string.optional(),
  'additional_info.payer.phone.extension': schema.string.optional(),
  /** Endereço do pagador. */
  'additional_info.payer.address.zip_code': schema.string.optional(),
  'additional_info.payer.address.street_name': schema.string.optional(),
  'additional_info.payer.address.street_number': schema.string.optional(),
  /** Data de cadastro do comprador em seu site. */
  'additional_info.registration_date': schema.string.optional(),
  /** Informações de envio. */
  'additional_info.shipments.address.zip_code': schema.string.optional(),
  'additional_info.shipments.address.street_name': schema.string.optional(),
  'additional_info.shipments.address.street_number': schema.string.optional(),
  'additional_info.shipments.address.receiver_address': schema.string.optional(),
  'additional_info.shipments.address.floor': schema.string.optional(),
  'additional_info.shipments.address.apartment': schema.string.optional(),
  /** Endereço do comprador. */
  'additional_info.receiver_address': schema.string.optional(),
  /** Payment status. */
  'additional_info.status': schema.enum([
    'pending',
    'approved',
    'authorized',
    'in_process',
    'in_mediation',
    'rejected',
    'cancelled',
    'refunded',
    'charged_back',
  ]),
})

export const MercadoPagoPaymentSearchSchema = schema.create({
  qs: schema.string(),
})
