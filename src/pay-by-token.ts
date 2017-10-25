export interface IPayByTokenParams {
  /*
  	Card authorization key.
  */
  card_key:	string;
  card_token: string;
   /*
    Authentication key for each individual partner.
  */
  partner_key: string;
  /*
    Involved merchant’s identifier as defined on Portal.
  */
  merchant_id: string;
  /*
    Transaction price.
  */
  amount: number;
  /*
    The letter abbreviation for currency, following ISO 4217.
  */
  currency?: string;
   /*
    A self-defined identifier for each transaction, for TapPay to identify transaction.
  */
  order_number?: string;
  /*
    Transaction identifier for the bank.
    You may customize one here if you wish, but it must be unique.
  */
  bank_transaction_id?: string;
  /*
    Details of the transaction.
    You should include as much information as possible.
    It will help our fraud detector in distinguishing real and fake transaction.
  */
  details: string;
  /*
    Number of intervals of payments for a particular transaction.
    Default set this value as 0. ( Not available in Apple Pay and Android Pay )
  */
  instalment: number;
  /*
    The number of days between the time bank authorizes the payment and the time bank actually captures the payment.
    Default is 0.
    If you wish to capture the payment yourself, use -1 as the value to disable automatic capture.
  */
  delay_capture_in_days: number;
  /*
    Fraud detect identifier,
    You will only need this parameter if you want to use fraud detect.
  */
  fraud_id: string;
  /*
    The 3 digits found on the back of most cards.
    You will only need this parameter if you need the bank to verify this number.
  */
  card_ccv: string;
}

export interface IPayByTokenResponse {
  /*
    Response code. 0 indicates success.
  */
  status:	number;
  /*
    Error message.
  */
  msg: string;
  /*
    Unique identifier for this transaction generated by our server.
  */
  rec_trade_id: string;
  /*
    Transaction identifier for the bank.
    You may customize one here if you wish, but it must be unique.
  */
  bank_transaction_id: string;
  /*
    Transaction price.
  */
  amount: number;
  /*
    Bank authorization code.
  */
  auth_code: string;
  /*
    Card information.
  */
  card_info: {
    /*
      First six digits of the card
    */
    bin_code: string;
    /*
      Last four digits of the card
    */
    last_four: string;
    /*
      Card issuer
    */
    issuer: string;
    /*
      Card usage
      0 = credit card
      1 = debit card
      2 = prepaid card
    */
    funding: number;
    /*
      Card type
      1 = VISA
      2 = MasterCard
      3 = JCB
      4 = Union Pay
      5 = AMEX
    */
    type: number;
    /*
      Card level
    */
    level: string;
    /*
      Country of card issuer
    */
    country: string;
    /*
      Country code of card issuer
    */
    country_code: string;
    /*
      Card expired date, Format : YYYYMM,
      Only will return when remember = true ( Apple Pay / Android Pay will not return this parameter )
    */
    expiry_date: string;
  };
  /*
    A self-defined identifier for each transaction, for TapPay to identify transaction.
  */
  order_number: string;
  /*
    Acquiring banks or payment processors.
  */
  acquirer: string;
  /*
    Time of transaction.
  */
  transaction_time_millis: number;
  /*
    Time when the bank handles the transaction.
  */
  bank_transaction_time: {
    start_time_millis: number;
    end_time_millis: number;
  };
  /*
    Response code from the bank.
  */
  bank_result_code: string;
  /*
    Error message from the bank.
  */
  bank_result_msg: string;
}
