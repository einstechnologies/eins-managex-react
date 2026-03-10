export interface HidGetInfoResponse {
    uptime: {
        days: number
        hours: number
        minutes: number
        seconds: number
    }

    time: number
    daylight_savings_time_active: boolean

    memory: {
        disk: {
            free: number
            total: number
        }
        ram: {
            free: number
            total: number
        }
    }

    license: {
        users: number
        device: number
        type: number
    }

    biometrics: {
        max_num_records: number
        max_possible_num_records: number
    }

    network: {
        mac: string
        ip: string
        netmask: string
        gateway: string
        primary_dns: string
        secondary_dns: string
        custom_hostname_enabled: boolean
        device_hostname: string
        web_server_port: number
        ssl_enabled: boolean
        self_signed_certificate: boolean
        dhcp_enabled: boolean
        ten_mbps: boolean
    }

    serial: string
    version: string
    device_id: string
    secbox_version: string
    iDCloud_code: string
    online: boolean
    online_available: boolean
    device_name: string
    device_two_names: string
}