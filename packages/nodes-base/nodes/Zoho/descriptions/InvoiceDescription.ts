import {
	INodeProperties,
} from 'n8n-workflow';

import {
	billingAddress,
	makeCustomFieldsFixedCollection,
	makeGetAllFields,
	makeProductDetails,
	shippingAddress,
} from './SharedFields';

export const invoiceOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Create or update',
				value: 'upsert',
				description: 'Create a new record, or update the current one if it already exists (upsert)',
			},
			{
				name: 'Delete',
				value: 'delete',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const invoiceFields = [
	// ----------------------------------------
	//            invoice: create
	// ----------------------------------------
	{
		displayName: 'Subject',
		name: 'subject',
		description: 'Subject or title of the invoice.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'create',
				],
			},
		},
	},

	// ----------------------------------------
	//            invoice: upsert
	// ----------------------------------------
	{
		displayName: 'Subject',
		name: 'subject',
		description: 'Subject or title of the invoice. If a record with this subject exists it will be updated, otherwise a new one will be created.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'upsert',
				],
			},
		},
	},

	// ----------------------------------------
	//        invoice: create + upsert
	// ----------------------------------------
	makeProductDetails('invoice'),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'create',
					'upsert',
				],
			},
		},
		options: [
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'options',
				default: [],
				typeOptions: {
					loadOptionsMethod: 'getAccounts',
				},
				description: 'ID of the account associated with this invoice.',
			},
			{
				displayName: 'Adjustment',
				name: 'Adjustment',
				type: 'number',
				default: '',
				description: 'Adjustment in the grand total, if any.',
			},
			billingAddress,
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'string',
				default: '',
				description: 'Symbol of the currency in which revenue is generated.',
			},
			makeCustomFieldsFixedCollection('invoice'),
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'Due_Date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Exchange Rate',
				name: 'Exchange_Rate',
				type: 'number',
				default: '',
				description: 'Exchange rate of the default currency to the home currency.',
			},
			{
				displayName: 'Grand Total',
				name: 'Grand_Total',
				type: 'number',
				default: '',
				description: 'Total amount for the product after deducting tax and discounts.',
			},
			{
				displayName: 'Invoice Date',
				name: 'Invoice_Date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Invoice Number',
				name: 'Invoice_Number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Sales Commission',
				name: 'Sales_Commission',
				type: 'number',
				default: '',
				description: 'Commission of sales person on deal closure as a percentage. For example, enter 12 for 12%.',
			},
			shippingAddress,
			{
				displayName: 'Status',
				name: 'Status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Sub Total',
				name: 'Sub_Total',
				type: 'number',
				default: '',
				description: 'Total amount for the product excluding tax.',
			},
			{
				displayName: 'Tax',
				name: 'Tax',
				type: 'number',
				default: '',
				description: 'Tax amount as the sum of sales tax and value-added tax.',
			},
			{
				displayName: 'Terms and Conditions',
				name: 'Terms_and_Conditions',
				type: 'string',
				default: '',
				description: 'Terms and conditions associated with the invoice.',
			},
		],
	},

	// ----------------------------------------
	//             invoice: delete
	// ----------------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		description: 'ID of the invoice to delete.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//               invoice: get
	// ----------------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		description: 'ID of the invoice to retrieve.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//             invoice: getAll
	// ----------------------------------------
	...makeGetAllFields('invoice'),

	// ----------------------------------------
	//             invoice: update
	// ----------------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		description: 'ID of the invoice to update.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'invoice',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'options',
				default: [],
				typeOptions: {
					loadOptionsMethod: 'getAccounts',
				},
				description: 'ID of the account associated with this invoice.',
			},
			{
				displayName: 'Adjustment',
				name: 'Adjustment',
				type: 'number',
				default: '',
				description: 'Adjustment in the grand total, if any.',
			},
			billingAddress,
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'string',
				default: '',
				description: 'Symbol of the currency in which revenue is generated.',
			},
			makeCustomFieldsFixedCollection('invoice'),
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'Due_Date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Exchange Rate',
				name: 'Exchange_Rate',
				type: 'number',
				default: '',
				description: 'Exchange rate of the default currency to the home currency.',
			},
			{
				displayName: 'Grand Total',
				name: 'Grand_Total',
				type: 'number',
				default: '',
				description: 'Total amount for the product after deducting tax and discounts.',
			},
			{
				displayName: 'Invoice Date',
				name: 'Invoice_Date',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Invoice Number',
				name: 'Invoice_Number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Sales Commission',
				name: 'Sales_Commission',
				type: 'number',
				default: '',
				description: 'Commission of sales person on deal closure as a percentage. For example, enter 12 for 12%.',
			},
			shippingAddress,
			{
				displayName: 'Status',
				name: 'Status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Sub Total',
				name: 'Sub_Total',
				type: 'number',
				default: '',
				description: 'Total amount for the product excluding tax.',
			},
			{
				displayName: 'Subject',
				name: 'Subject',
				type: 'string',
				default: '',
				description: 'Subject or title of the invoice.',
			},
			{
				displayName: 'Tax',
				name: 'Tax',
				type: 'number',
				default: '',
				description: 'Tax amount as the sum of sales tax and value-added tax.',
			},
			{
				displayName: 'Terms and Conditions',
				name: 'Terms_and_Conditions',
				type: 'string',
				default: '',
				description: 'Terms and conditions associated with the invoice.',
			},
		],
	},
] as INodeProperties[];
